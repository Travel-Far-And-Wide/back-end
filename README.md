# back-end
## [Front end can be found here](https://github.com/Travel-Far-And-Wide/front-end/)
## [API Documentation can be found here](https://documenter.getpostman.com/view/10657242/TVejhqGG#c8866234-8378-411e-9dd3-c41d78384ab4)
## [Trello board can be found here](https://trello.com/b/H4NUIEcx/travel-far-and-wide)
## List of modules and libraries being used:
- __Knex__ - SQL Query Builder for JavaScript.
- __Knex-cleaner__ - Helper library to clean a PostgreSQL, MySQL or SQLite3 database tables using Knex. Great for integration tests.
- __Helmet__ - helps you secure your Express apps by setting various HTTP headers.
- __Express__ - minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications, as well as APIs. Can be thought of in the same vein as “React” but for the backend that way we use it. Will also allow our server to be able to read JSON.
- __CORS__ - node.js package for providing a Connect/Express middleware that can be used to enable CORS (Cross Origin Resource sharing) with various options.
- __Sqlite3__ - relational database management system (RDBMS) that will let us interact with our .db3 files.
- __Dotenv__ - is a zero-dependency module that loads environment variables from a .env file into process.env . Storing configuration in the environment separate from code is based on the Twelve-Factor App methodology.
- __cross-env__ - run scripts that set and use environment variables across different platforms/OSes.
- __bcryptjs__ - used for password hashing/salting/accumulative hashing rounds.
- __Jsonwebtoken__ - add authentication when logging in to access protected routes.
- __pg__ - node-postgres is a collection of node.js modules for interfacing with your PostgreSQL database.
 ### Development dependencies:
 - __Nodemon__ - is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
 - __jest__ - Jest is a JavaScript test runner, a  library for creating, running, and structuring tests.
 - __supertest__ - HTTP assertions library that uses __superagent__ to allow for easy API testing.
 

## Endpoints
- ### Post - Register a new user

```http://localhost:4000/auth/register```

This endpoint is used to register a user, if they pass in all the necessary details in the body of the request.
#### Body of request example:
```
{"username": "example_user",
"password": "example_password",
"email": "example_email"}
```


- ### Post - Login with a user

``` http://localhost:4000/auth/login```

This endpoint is used to login a user, if they pass in valid username and password.

#### Body of request example:
```
{"username": "example_user",
"password": "example_password",
"email": "example_email"}
```


- ### Post - Add pin

```http://localhost:4000/pins/add```

This endpoint is used to add a pin, if the user is logged in and passes in all the required fields.

#### Body of request example:
```
{
    "user_id": 2,
    "name": "",
    "address": "",
    "lat": 1324,
    "lng": 1234,
    "date": "09-11-2020",
    "title": "",
    "description": "",
    "image_url": "",
    "category": "test",
    "visited": 0
}
```


- ### Get - Get a specific pin

```http://localhost:4000/pins/2```

This endpoint is used to get info on a specific pin, if the user is logged in.


- ### Get - Get all of a user's pins

```http://localhost:4000/pins/mypins/1```

This endpoint is used to get info on a specific pin, if the user is logged in.


- ### Put - Edit pin

```http://localhost:4000/pins/edit/10```

This endpoint is used to edit a pin's fields, if the user is logged in and passes in all the required fields.

#### Body of request example:
```
{
    "user_id": "2",
    "name": "Adding changes",
    "address": "",
    "lat": 1324,
    "lng": 1234,
    "date": "09-11-2020",
    "title": "",
    "description": "",
    "image_url": "",
    "category": "test",
    "visited": true
}
```


- ### Delete - Remove a pin

```http://localhost:4000/pins/delete/15```

This endpoint is used to remove a pin, if the user is logged in.
