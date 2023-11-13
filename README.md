# Travel Planner

Plan your adventures, curate a personalized to-do list for each destination, and easily share a digital travel card with friends and family. Explore the world hassle-free with all your travel essentials at your fingertips

## Tech Stack

**Backend:** Django, django-rest-framework, django-rest-knox, SQLite

**FrontEnd:** NextJs(Typescript), Redux-Toolkit, React-Redux and Tailwindcss

## Screenshots

### Home

![Homepage](https://i.imgur.com/a7HejYG.png)

### Profile

![Profile](https://i.imgur.com/MLQKzyF.png)

### New Plan

![New Plan](https://i.imgur.com/qpYwb6y.png)

### Plan Details

![Plan Details](https://i.imgur.com/NTZuRKC.png)

### New To-do

![New To-do](https://i.imgur.com/N2qVOaJ.png)

### Plan Share Card

![Plan Share Card](https://i.imgur.com/Rs1QULd.png)

## Run Locally

### Clone the project

```bash
  git clone https://github.com/wesleywil/travel-planner
```

### Install Dependencies

#### Backend Folder

```bash
    cd/backend
    python 3 -m venv env
    source env/bin/activate
    pip install -r requirements.txt
    python manage.py makemigrations
    python manage.py migrate
    python createsuperuser
```

#### Frontend Folder

```bash
    cd/frontend
    npm install
```

### Running App

#### Backend Folder

```bash
    source env/scripts activate
    python manage.py runserver
```

#### Frontend Folder

```bash
  npm run dev
```

## Authors

- [Wesley Wilson](https://github.com/wesleywil)
