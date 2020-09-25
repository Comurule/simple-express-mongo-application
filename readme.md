# A Simple Express Mongo Application #

### Description ###

* Quick summary:
This is a simple starter kit for an Express-MongoDB-Redis(cache) application with a simple User registration and authentication(using JWT).

* Version: 
1.0

### How to Setup? ###

To run this application, you'll need 
[Git](https://git-scm.com), 
[Redis](https://github.com/dmajkic/redis/downloads) (for caching) and 
[Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. 

* Clone the repository using this command(in your Command Line)
```
git clone https://github.com/Comurule/simple-express-mongo-application.git
```

* Go into the repository
```
cd simple-express-mongo-application
```

* Create .env file for environmental variables in your root directory like the __.env.example__ file and provide the keys 

* Install all dependencies using this command(in your Command Line)
```
npm install
```

* Run the app with this command(in your Command Line)
```
npm start
```

* Check the port on the specified port on the env or 8080

### API End Points ###

- To Register
```
POST Request -> http://localhost:8080/api/v1/register

Payload ->
{
    "email": "email@example.com",
    "password": "hello"
}

Response -> 
{
    "status": true,
    "message": "Registered successfully",
    "data": {
        "_id": "5f6e1b21bfcad30674167968",
        "email": "email@exampl.com",
        "password": "$2a$10$Bvv/NR.5f8NrZEGiwpY7D.Gd3/e78/c2Uy06UqOZ3WE0b9nF5ifGG",
        "createdAt": "2020-09-25T16:30:25.231Z",
        "updatedAt": "2020-09-25T16:30:25.231Z",
        "__v": 0
    }
}
```

- To Login
```
POST Request -> http://localhost:8080/api/v1/login

Payload ->
{
    "email": "email@example.com",
    "password": "hello"
}

Response -> 
{
    "status": true,
    "message": "Welcome email@exampl.com",
    "data": {
        "_id": "5f6e1b21bfcad30674167968",
        "email": "email@exampl.com",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjZlMWIyMWJmY2FkMzA2NzQxNjc5NjgiLCJpYXQiOjE2MDEwNTE1MzYsImV4cCI6MTYwMTEzNzkzNn0.4Qc5Vjzxupy38kgmDwZlXEApaNG7PXm32IDPB5PXLzc"
    }
}
```

- DashBoard
```
GET Request -> http://localhost:8080/api/v1/login

Headers -> 
{
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjZlMWIyMWJmY2FkMzA2NzQxNjc5NjgiLCJpYXQiOjE2MDEwNTE1MzYsImV4cCI6MTYwMTEzNzkzNn0.4Qc5Vjzxupy38kgmDwZlXEApaNG7PXm32IDPB5PXLzc"
}


Response -> 
{
    "status": true,
    "message": "User Dashboard details",
    "data": {
        "_id": "5f6e1b21bfcad30674167968",
        "email": "email@exampl.com",
        "password": "$2a$10$Bvv/NR.5f8NrZEGiwpY7D.Gd3/e78/c2Uy06UqOZ3WE0b9nF5ifGG",
        "createdAt": "2020-09-25T16:30:25.231Z",
        "updatedAt": "2020-09-25T16:30:25.231Z",
        "__v": 0
    }
}
```


### Author ###

Chibuike Umechukwu