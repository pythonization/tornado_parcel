"""Routes and Web application itself.
"""
import asyncio
from sqlalchemy import select
import tornado

from .models import (
    LockerStatusEnum,
    Locker,
    Session,
)


APP_PORT = 8888


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
            print(
                list(
                    session.scalars(
                        select(Locker)
                    )
                )
            )
        self.write("Temp_answer")

    def post(self):
        """Create new locker.
        """
        with Session.begin() as session:
            session.add(
                Locker(
                    capacity_xs=20,
                    capacity_s=20,
                    capacity_m=20,
                    capacity_l=10,
                    capacity_xl=5,

                    status=LockerStatusEnum.OK,
                    full_address='Rimi RAF, Jelgava, Latvia'
                )
            )
        self.write("Temp_answer_of_create")

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
