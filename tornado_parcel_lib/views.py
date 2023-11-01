"""Routes and Web application itself.
"""
import asyncio
import enum
import json

# from sqlalchemy import select
import tornado

from .models import (
    Locker,
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


# region routes


class HandlerHome(tornado.web.RequestHandler):
    """Home page route.
    """

    def get(self):
        """Render home page on GET HTTP request.
        """
        # self.write("Hello, world")

        self.render("home.html")


class HandlerLocker(tornado.web.RequestHandler):
    """API of locker.
    """

    def get(self):
        """Return list of lockers or single locker.
        """
        with Session() as session:
            all_recs = [
                l.__dict__
                for l in session.query(Locker).all()
            ]
            for r in all_recs:
                del r['_sa_instance_state']

            self.write(
                json.dumps(
                    all_recs,
                    default=additional_convertor
                )
            )

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

    # def post(self):
    #     """Create new locker.
    #     """
    #     with Session.begin() as session:
    #         session.add(
    #             Locker(
    #                 capacity_xs=20,
    #                 capacity_s=20,
    #                 capacity_m=20,
    #                 capacity_l=10,
    #                 capacity_xl=5,

    #                 status=LockerStatusEnum.OK,
    #                 full_address='Rimi RAF, Jelgava, Latvia'
    #             )
    #         )
    #     self.write("Temp_answer_of_create")

# endregion


async def main_app():
    """Setup Web application
    """
    app = tornado.web.Application(
        [
            ("/", HandlerHome),
            ("/api/locker", HandlerLocker),
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
