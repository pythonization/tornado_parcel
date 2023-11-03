"""Routes and Web application itself.
"""
import asyncio
import enum
import json

# from sqlalchemy import select
import tornado

from .models import (
    Locker, Parcel,
    Session,
)


APP_PORT = 8888


def additional_convertor(obj):
    """Help "json.dumps(" to convert some objects.
    """
    if isinstance(obj, enum.Enum):
        return obj.name

    raise TypeError(
        'Unknown object during JSON parsing', obj
    )


def short_validation_errors(func):
    """Make validation errors shorter.
    """

    def inner(self):
        try:
            func(self)
        except ValueError as err:
            self.set_status(400)
            self.write(
                err.args[0]
            )

    return inner


def check_parcel_total(parcel_rec):
    """Check if parcels does not exceed capacity.
    """
    size2check = parcel_rec.size
    locker_rec = parcel_rec.locker_now_2o

    max_this_size = getattr(
        locker_rec,
        'capacity_' + size2check.name.lower()
    )

    total_parcels = 0
    for p_rec in locker_rec.parcel_2m:
        if p_rec.size == size2check:
            total_parcels += 1

    if max_this_size < total_parcels:
        raise ValueError(
            f'Too many parcels of size {size2check.name} in this locker'
        )

# region routes


class HandlerHome(tornado.web.RequestHandler):
    """Home page route.
    """

    def get(self):
        """Render home page on GET HTTP request.
        """
        self.render("home.html")


class HandlerParcel(tornado.web.RequestHandler):
    """API of parcel.
    """

    def get(self):
        """Return list of parcels or single parcel.

        Sample for getting single record:
        curl 'http://127.0.0.1:8888/api/parcel?id=1' 
        """
        id_arg = self.get_query_argument('id', None)

        with Session() as session:
            if id_arg:
                # single record
                result = session.get(
                    Parcel,
                    int(id_arg)
                ).__dict__
                del result['_sa_instance_state']
            else:
                # all records
                result = [
                    l.__dict__
                    for l in session.query(Parcel).all()
                ]
                for r in result:
                    del r['_sa_instance_state']

        self.write(
            json.dumps(
                result,
                default=additional_convertor
            )
        )

    @short_validation_errors
    def post(self):
        """Create new parcel.
        """
        with Session() as session:
            parcel_rec = Parcel(
                **tornado.escape.json_decode(
                    self.request.body
                )
            )
            session.add(parcel_rec)

            # commit now to get ID of record
            session.commit()

            check_parcel_total(
                parcel_rec
            )

            self.write(
                str(parcel_rec.id)
            )

    @short_validation_errors
    def put(self):
        """Update parcel.
        """
        dict2write = tornado.escape.json_decode(
            self.request.body
        )
        target_id = dict2write['id']
        del dict2write['id']

        with Session() as session:
            parcel_rec = session.get(
                Parcel, target_id
            )

            for field, value in dict2write.items():
                # this way is safer than update(), see:
                # https://stackoverflow.com/questions/23152337/how-to-update-sqlalchemy-orm-object-by-a-python-dict

                setattr(parcel_rec, field, value)

            session.commit()

            check_parcel_total(
                parcel_rec
            )

    @short_validation_errors
    def delete(self):
        """Delete parcel.
        """
        with Session.begin() as session:
            session.delete(
                session.get(
                    Parcel,
                    int(self.request.body)
                )
            )


class HandlerLocker(tornado.web.RequestHandler):
    """API of locker.
    """

    def get(self):
        """Return list of lockers or single locker.

        Sample for getting single record:
        curl 'http://127.0.0.1:8888/api/locker?id=1'
        """
        id_arg = self.get_query_argument('id', None)

        with Session() as session:
            if id_arg:
                # single record
                result = session.get(
                    Locker,
                    int(id_arg)
                ).__dict__
                del result['_sa_instance_state']
            else:
                # all records
                result = [
                    l.__dict__
                    for l in session.query(Locker).all()
                ]
                for r in result:
                    del r['_sa_instance_state']

        self.write(
            json.dumps(
                result,
                default=additional_convertor
            )
        )

    @short_validation_errors
    def post(self):
        """Create new locker.
        """
        with Session() as session:
            locker_rec = Locker(
                **tornado.escape.json_decode(
                    self.request.body
                )
            )
            session.add(locker_rec)

            # commit now to get ID of record
            session.commit()

            self.write(
                str(locker_rec.id)
            )

    @short_validation_errors
    def put(self):
        """Update locker.
        """
        dict2write = tornado.escape.json_decode(
            self.request.body
        )
        target_id = dict2write['id']
        del dict2write['id']

        with Session.begin() as session:
            locker_rec = session.get(
                Locker, target_id
            )

            for field, value in dict2write.items():
                # this way is safer than update(), see:
                # https://stackoverflow.com/questions/23152337/how-to-update-sqlalchemy-orm-object-by-a-python-dict

                setattr(locker_rec, field, value)

    @short_validation_errors
    def delete(self):
        """Delete locker.
        """
        with Session.begin() as session:
            session.delete(
                session.get(
                    Locker,
                    int(self.request.body)
                )
            )


# endregion


async def main_app():
    """Setup Web application
    """
    app = tornado.web.Application(
        [
            ("/", HandlerHome),
            ("/api/locker", HandlerLocker),
            ("/api/parcel", HandlerParcel),
        ],

        # this app anyway will not go to production - keep debug always True
        debug=True,

        template_path='templates',
        static_path="static",
    )
    app.listen(APP_PORT)
    await asyncio.Event().wait()


def run_server():
    """Make web-server run infinitely
    """
    print(f'\nApp will run on: http://127.0.0.1:{APP_PORT}')

    asyncio.run(
        main_app()
    )
