# Portfolio site

## Quickstart

Get the source from GitHub:

    git clone git@github.com:domazet93/blackBlob.git

Create virtual environment:

    mkvirtualenv blob

Navigate to the project directory:

    cd blackBlob/

Install required python dependencies:

    pip install -r requirements.txt

Run the migrations:

    python manage.py migrate

Run development server:

    python manage.py runserver

## Frontend build

Navigate to the frontend directory:

    cd app/static/app

Install dependencies:

    npm install

Run build for development:

    npm run dev

Run build for production:

    npm run prod
