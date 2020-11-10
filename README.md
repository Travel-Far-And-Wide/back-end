# back-end
## [API Documentation can be found here](https://documenter.getpostman.com/view/10657242/TVejhqGG#c8866234-8378-411e-9dd3-c41d78384ab4)
### Post - Register a new user

```http://localhost:4000/auth/register```

This endpoint is used to register a user, if they pass in all the necessary details in the body of the request.
#### Body of request example:
```
{"username": "example_user",
"password": "example_password",
"email": "example_email"}
```

### Post - Login with a user

``` http://localhost:4000/auth/login```

This endpoint is used to login a user, if they pass in valid username and password.

#### Body of request example:
```
{"username": "example_user",
"password": "example_password",
"email": "example_email"}
```

### Post - Add pin

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

### Get - Get a specific pin

```http://localhost:4000/pins/2```

This endpoint is used to get info on a specific pin, if the user is logged in.

### Get - Get all of a user's pins

```http://localhost:4000/pins/mypins/1```

This endpoint is used to get info on a specific pin, if the user is logged in.


### Post - Edit pin


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

### Delete - Remove a pin


```http://localhost:4000/pins/delete/15```

This endpoint is used to remove a pin, if the user is logged in.
