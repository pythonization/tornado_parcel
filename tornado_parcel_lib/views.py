"""Routes and Web application itself.
"""

import asyncio
import tornado

# region routes


class HomeHandler(tornado.web.RequestHandler):
    """Home page route.
    """

    def get(self):
        """Render home page on GET HTTP request.
        """
        # self.write("Hello, world")

        self.render("home.html")

# endregion


async def main_app():
    """Setup Web application
    """
    app = tornado.web.Application(
        [
            ("/", HomeHandler),
        ],

        # this app anyway will not go to production - keep debug always True
        debug=True,

        template_path='templates',
    )
    app.listen(8888)
    await asyncio.Event().wait()
