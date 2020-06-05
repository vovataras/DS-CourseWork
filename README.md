# DS-CourseWork

## Internet Shop
This repository contains a client and server for internet shop.

### Used technologies:
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Django](https://www.djangoproject.com/)
* [DRF (Django REST Framework)](https://www.django-rest-framework.org/)
* [axios](https://github.com/axios/axios)

### Pre-requirements:
* [Python](https://www.python.org/downloads/) 3.8 or higher;
* [Pipenv](https://github.com/pypa/pipenv)
* [Node.js](https://nodejs.org/)

---
### Start server:

```
cd ./server
pipenv install
pipenv shell
cd ./shopbackend
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```
Server will start on:
```
http://127.0.0.1:8000/
```

### Start client:
```
cd ./client/shop
npm install
npm start
```
Client wiil start on:
```
http://localhost:3000/
```