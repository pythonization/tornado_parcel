"""Setup database and ORM.
"""
import enum
from typing import List

from sqlalchemy import (
    ForeignKey, String, Enum, Column,
    create_engine,
)
from sqlalchemy.orm import (
    DeclarativeBase, Mapped,
    mapped_column, relationship, sessionmaker,
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
        back_populates="locker_now_2o", cascade="all, delete-orphan"
    )


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

    size: Mapped[SizeEnum] = Enum(SizeEnum)

    locker_now_id: Mapped[int] = mapped_column(ForeignKey("parcel_locker.id"))
    locker_now_2o: Mapped["Locker"] = relationship(back_populates="parcel_2m")


engine = create_engine('sqlite:///database.db')
Session = sessionmaker(engine)
