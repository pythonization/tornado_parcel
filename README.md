# Tornado Parcel

Simple project with REST API using Tornado framework.

## Installation

```bash
# spell-checker: disable

sudo apt install python3-venv # If needed

python3 -m venv .venv
source .venv/bin/activate

pip install -r requirements.txt
# should install all following:
# pip install autopep8
# pip install pylint
# pip install tornado
# pip install SQLAlchemy

./tornado_parcel.py init_db

# spell-checker: enable
```

## Run web-server

```bash
source .venv/bin/activate
./tornado_parcel.py run
```
