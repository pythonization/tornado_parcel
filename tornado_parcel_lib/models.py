"""Setup database and ORM.
"""
import enum
import re
from typing import List

from sqlalchemy import (
    ForeignKey, String, Enum, Column,
    create_engine,
)
from sqlalchemy.orm import (
    DeclarativeBase, Mapped,
    mapped_column, relationship, sessionmaker, validates,
)


re_phone = re.compile(
    r'\+37(0|1|2)\d{8}'
)
re_email = re.compile(
    # according to
    # https://stackoverflow.com/questions/201323/how-can-i-validate-an-email-address-using-a-regular-expression
    r'''(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])'''
)


def create_all_db_tables():
    """Create table structure inside DB.
    """
    Base.metadata.create_all(engine)

    print('DB init successfully done.')


class SizeEnum(enum.Enum):
    """Possible sizes of parcel.
    """
    XS = 1
    S = 2
    M = 3
    L = 4
    XL = 5


class LockerStatusEnum(enum.Enum):
    """Possible states of parcel locker.
    """
    OK = 1
    ON_MAINTENANCE = 2
    FAILED = 3


class Base(DeclarativeBase):
    """Base class that is need by sqlalchemy.

    (it use __init_subclass__ inside)
    """


class Locker(Base):
    """Describes parcel locker.
    """
    __tablename__ = "parcel_locker"

    id: Mapped[int] = mapped_column(primary_key=True)

    capacity_xs: Mapped[int]
    capacity_s: Mapped[int]
    capacity_m: Mapped[int]
    capacity_l: Mapped[int]
    capacity_xl: Mapped[int]

    # not working like this:
    # status: Mapped[LockerStatusEnum] = Enum(LockerStatusEnum)
    status = Column(
        Enum(LockerStatusEnum)
    )

    full_address: Mapped[str]

    parcel_2m: Mapped[List["Parcel"]] = relationship(
        back_populates="locker_now_2o",
        lazy='dynamic'

        # better do not delete parcels automatically
        # cascade="all, delete-orphan"
    )

    @validates(
        'capacity_xs', 'capacity_s', 'capacity_m', 'capacity_l', 'capacity_xl',
    )
    def validate_capacity(self, key, value):
        """Validates capacity fields.
        """

        if 0 <= value < 200:
            sizes2check = SizeEnum[
                key[9:].upper()
            ]

            count_parcels_now = 0
            for parcel_r in self.parcel_2m:
                if parcel_r.size == sizes2check:
                    count_parcels_now += 1

            if value < count_parcels_now:
                raise ValueError(
                    f"You cannot decrease {key} size to {value}, because "
                    f"locker already store {count_parcels_now} of that size"
                )

            return value

        raise ValueError(
            f"Field {key} should be between 0 and 200"
        )

    @validates("full_address", )
    def validate_required_fields(self, key, value):
        """Validates fields that should be set.

        (seems sqlalchemy does not do checks itself on sqlite DB)
        """
        if not value:
            raise ValueError(
                f"Field {key} should be filled on parcel"
            )
        return value


class Parcel(Base):
    """Describes parcel.

    Note about length of sender_phone and receiver_phone:
    according to
    https://worldpopulationreview.com/country-rankings/phone-number-length-by-country
    In Baltic countries length of phone number is 8. With code like '+371' it
    gives 12 in total.

    "person" table can be created for storing full_name, phone, email of sender
    and receiver. But storing data on parcel has befit. If person has account
    and change name/phone on that account, parcel will hold historically correct
    data.
    """
    __tablename__ = "parcel"

    id: Mapped[int] = mapped_column(primary_key=True)

    sender_full_name: Mapped[str]
    sender_phone: Mapped[str] = mapped_column(
        String(12)
    )
    sender_email: Mapped[str]

    receiver_full_name: Mapped[str]
    receiver_phone: Mapped[str] = mapped_column(
        String(12)
    )
    receiver_email: Mapped[str]

    # not working like this:
    # size: Mapped[SizeEnum] = Enum(SizeEnum)
    size = Column(
        Enum(SizeEnum)
    )

    locker_now_id: Mapped[int] = mapped_column(
        ForeignKey("parcel_locker.id"),
        nullable=False
    )
    locker_now_2o: Mapped["Locker"] = relationship(back_populates="parcel_2m")

    @validates(
        "sender_full_name", "receiver_full_name"
    )
    def validate_required_fields(self, key, value):
        """Validates fields that should be set.

        (seems sqlalchemy does not do checks itself on sqlite DB)
        """
        if not value:
            raise ValueError(
                f"Field {key} should be filled on parcel"
            )
        return value

    @validates(
        "sender_phone", "receiver_phone"
    )
    def validate_phone(self, key, value):
        """Validates phone numbers.
        """
        if not re_phone.fullmatch(value):
            raise ValueError(
                f"Phone {key} is not baltic phone number"
            )
        return value

    @validates(
        "sender_email", "receiver_email"
    )
    def validate_email(self, key, value):
        """Validates email numbers.
        """
        if not re_email.fullmatch(value):
            raise ValueError(
                f"Email {key} is wrong"
            )
        return value

    @validates("locker_now_id")
    def validate_locker_now_id(self, key, value):
        """Validates locker_now_id

        (seems sqlalchemy does not do checks itself on sqlite DB)
        """
        if not (
            value and
            isinstance(value, int)
        ):
            raise ValueError(
                "Field locker_now_id should be filled on parcel"
            )

        return value


engine = create_engine('sqlite:///database.db')
Session = sessionmaker(engine)
