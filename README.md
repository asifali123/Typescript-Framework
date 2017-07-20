Typescript Framework
===================


----------


Patterns and principles in this project:
-------------
- Multi - layer architectural pattern
- Generic repository pattern
- Singleton pattern 

Get started
-------------
Execute the following commands in the sequence: 

- gulp installation  
```
npm install gulp -g
```
- npm setup 
```
npm install
```
- Copy, compile, start 
```
gulp
```

----------

## API(s)

`URL : localhost:5000`

----------
Getting the users:
```
/users

Method: GET

Returns: List of users
```
----------
Creating a user:
```
/users

Method: POST

{
    "name": "asif",
    "age": 22,
    "address": "bangalore"
}

Returns: Success or error
```
----------
Updating a user:
```
/users/:id

Method: PUT

{
    "address": "india"
}

Returns: Success or error
```
----------
Delete a user:
```
/users/:id

Method: DELETE

Returns: Success or error
```
