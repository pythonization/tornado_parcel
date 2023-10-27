"""Main file for running this web-server.
"""
import asyncio

from tornado_parcel_lib.views import main_app


if __name__ == "__main__":
    asyncio.run(
        main_app()
    )
