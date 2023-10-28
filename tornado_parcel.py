#!/usr/bin/env python3
"""Main file for running this web-server.
"""
import argparse

from tornado_parcel_lib.models import create_all_db_tables
from tornado_parcel_lib.views import run_server


if __name__ == "__main__":

    t_parcel_arg_parse = argparse.ArgumentParser(
        description='Tornado Parcel - web-server with rest API.',
    )
    # to avoid attribute error when "t_parcel_arg_parse.subprogram is not None"
    t_parcel_arg_parse.set_defaults(
        subprogram=None,
    )
    subprogram_selector = t_parcel_arg_parse.add_subparsers(
        title='Allows to choose one of listed subprogram',
        dest='subprogram_name'
    )

    sub_prg_init_db = subprogram_selector.add_parser(
        'init_db',
        help='Initialize Database (need before first server run)'
    )
    sub_prg_init_db.set_defaults(subprogram=create_all_db_tables)

    sub_prg_run = subprogram_selector.add_parser(
        'run',
        help='Run web-server'
    )
    sub_prg_run.set_defaults(subprogram=run_server)

    t_parcel_args = t_parcel_arg_parse.parse_args()

    if t_parcel_args.subprogram is not None:
        # subprogram selected correctly
        t_parcel_args.subprogram()
    else:
        # subprogram not selected
        t_parcel_arg_parse.print_help()
