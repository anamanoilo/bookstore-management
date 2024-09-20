# BlueGreen home assignment

Bookstore Inventory Manager.
The application is done using React for frontend, NestJS for backend, MongoDB for data storage.
mongo-migrate is included to populate the database with initial data

### Steps to launch locally

1. Install docker-compose https://docs.docker.com/compose/install/
2. Run `docker-compose up`
3. Navigate to http://localhost:3000 to see the web page

#### Possible Troubleshooting

- Ensure ports `3000`, `3001` are not taken by other processes running in the background, as those ports are used by the application by default and exposed to the host machine. Those are also could be reconfigured in `docker-compose.yml` by providing different env variables.

## Points to be improved

The app was done in a limited time frame, so leaves out a few things.

* Tests are ignored
* MongoDB chosen instead of Postgresql to save time
* Frontend Dockerfile would be better based on some kind of nginx image, or some other tool best suited serving static files
* Finish validation for MongoDB ObjectID for url params of API requests. It could have been a Transformation object instead of the simple validation pipe
* PUT `/books/:id` could be changed from PATCH
* make DELETE return 204 for subsequent deletes (200 returns an object first time)
* omit __v property on GET responses
* change _id to id in API responses