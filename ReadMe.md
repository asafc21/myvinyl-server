# Getting Started

## Available Scripts

In the project directory, you can run:

### `npm i`

On the first time you load this project you need to run this command first to install all the dependencies

### `npm start`

Runs the app in the development mode.\

### `npm run dev`

Launches the testing mode, nodemon with live changes and responses

## dotenv

follow the added .env_example file to define your environmental variables, on TOKEN_PRIVATE_KEY: you should have your randomized private key for jwt to create a token and on MONGODB_CON_STR: you need to put your connection string to MongoDB, if you choose a local one put the local, if it's an atlasDB put your cluster with your username and password.
take not either of those strings must end with a / (slash) for this to work.

## endpoints

### users

### URL - method

### /api/users/ - GET

returns an object in JSON format containing all users in the DB,
only Admin users can access this endpoint and receive an answer.
admin must be logged in and provide a token in the request's headers, token should look like this:

headers:
token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWM4YjUyOTE2NmNhNjcyNWM2ODQ2MmUiLCJpc0FkbWluIjpmYWxzZSwiaXNCdXNpbmVzcyI6dHJ1ZSwiaWF0IjoxNzA3NjU0NTI4LCJleHAiOjE3MTAyNDY1Mjh9.pNCuUTM2LTCLVaihHKaTB3_KM69OvPZFufsBgDydGFM

### /api/users/register - POST

register a new user, must follow this format(this is an example of a valid register):

name: {first:"first",middle:"",last:"last"},
phone:"0500000000",
email: must be a valid email,
password: 7 - 20 characters, must contain at least one special character, number, uppercase and lowercase letters.,
image:{url:must be a valid url of a profile pic,
alt:""},
address: {state:"",
country:"israel",
city:"haifa",
street"haiiiifa",
houseNumber:5,
zip:12345},

### /api/users/login - POST

login with an existing user in the DB, must provide email and matching password.

### /api/users/:id - GET

get user from DB with a matching id, id must be a valid hex string, only the registerd user can access this for himself, admins have access to all users.

user must be logged in and provide a token in the request's headers, token should look like this:

headers:
token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWM4YjUyOTE2NmNhNjcyNWM2ODQ2MmUiLCJpc0FkbWluIjpmYWxzZSwiaXNCdXNpbmVzcyI6dHJ1ZSwiaWF0IjoxNzA3NjU0NTI4LCJleHAiOjE3MTAyNDY1Mjh9.pNCuUTM2LTCLVaihHKaTB3_KM69OvPZFufsBgDydGFM

### /api/users/:id - PUT

update user from DB with a matching id, id must be a valid hex string, only the registerd user can access this for himself, admins have access to all users.
body should contain the same format as register to be valid.

user must be logged in and provide a token in the request's headers, token should look like this:

headers:
token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWM4YjUyOTE2NmNhNjcyNWM2ODQ2MmUiLCJpc0FkbWluIjpmYWxzZSwiaXNCdXNpbmVzcyI6dHJ1ZSwiaWF0IjoxNzA3NjU0NTI4LCJleHAiOjE3MTAyNDY1Mjh9.pNCuUTM2LTCLVaihHKaTB3_KM69OvPZFufsBgDydGFM

### /api/users/:id - DELETE

delete permanently a user from DB with a matching id, id must be a valid hex string, only the registerd user can access this for himself, admins have access
to all users.

user must be logged in and provide a token in the request's headers, token should look like this:

headers:
token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWM4YjUyOTE2NmNhNjcyNWM2ODQ2MmUiLCJpc0FkbWluIjpmYWxzZSwiaXNCdXNpbmVzcyI6dHJ1ZSwiaWF0IjoxNzA3NjU0NTI4LCJleHAiOjE3MTAyNDY1Mjh9.pNCuUTM2LTCLVaihHKaTB3_KM69OvPZFufsBgDydGFM

### Vinyls

### URL - method

### /api/vinyl/ - GET

returns a JSON object of all the vinyls stored in the DB.

### /api/vinyl/my-vinyls - GET

returns a JSON object of all the vinyls owned by the user in the DB.

user must be logged in and provide a token in the request's headers, token should look like this:

headers:
token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWM4YjUyOTE2NmNhNjcyNWM2ODQ2MmUiLCJpc0FkbWluIjpmYWxzZSwiaXNCdXNpbmVzcyI6dHJ1ZSwiaWF0IjoxNzA3NjU0NTI4LCJleHAiOjE3MTAyNDY1Mjh9.pNCuUTM2LTCLVaihHKaTB3_KM69OvPZFufsBgDydGFM

### /api/vinyl/ - POST

create a new vinyl for sale in the DB, user must provide a token in order to use this endpoint.

vinyl format example:
title:"COOOL",
artistName:"Anri",
label:"",
genre:"",
yearReleased:1984,
vinylCondition: "Mint,
sleeveCondition: "Mint,
phone:"0545469200",
email:"vinylForSale@gmail.com",
price:450,
image:{url:valid url for the image of the vinyl,
alt:""}.

headers:
token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWM4YjUyOTE2NmNhNjcyNWM2ODQ2MmUiLCJpc0FkbWluIjpmYWxzZSwiaXNCdXNpbmVzcyI6dHJ1ZSwiaWF0IjoxNzA3NjU0NTI4LCJleHAiOjE3MTAyNDY1Mjh9.pNCuUTM2LTCLVaihHKaTB3_KM69OvPZFufsBgDydGFM

### /api/vinyl/:id - GET

returns a vinyl from the DB that matches the id.
id must be a valid hex string.

### /api/vinyl/:id - PUT

updates a vinyl stored in the DB. user must be the owner of the vinyl or admin to use this endpoint. must provide token, id must be a valid hex string.
must follow the same format of creating a new vinyl.

headers:
token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWM4YjUyOTE2NmNhNjcyNWM2ODQ2MmUiLCJpc0FkbWluIjpmYWxzZSwiaXNCdXNpbmVzcyI6dHJ1ZSwiaWF0IjoxNzA3NjU0NTI4LCJleHAiOjE3MTAyNDY1Mjh9.pNCuUTM2LTCLVaihHKaTB3_KM69OvPZFufsBgDydGFM

### /api/vinyl/:id - PATCH

this endpoint will like a vinyl.

user must be logged in and provide a token.

notice this endpoint will unlike an already liked vinyl and viceversa.

headers:
token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWM4YjUyOTE2NmNhNjcyNWM2ODQ2MmUiLCJpc0FkbWluIjpmYWxzZSwiaXNCdXNpbmVzcyI6dHJ1ZSwiaWF0IjoxNzA3NjU0NTI4LCJleHAiOjE3MTAyNDY1Mjh9.pNCuUTM2LTCLVaihHKaTB3_KM69OvPZFufsBgDydGFM

### /api/vinyl/:id - DELETE

permanently deletes a vinyl stored in the DB. user must be the owner of the vinyl or admin to use this endpoint. must provide token, id must be a valid hex string.

headers:
token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWM4YjUyOTE2NmNhNjcyNWM2ODQ2MmUiLCJpc0FkbWluIjpmYWxzZSwiaXNCdXNpbmVzcyI6dHJ1ZSwiaWF0IjoxNzA3NjU0NTI4LCJleHAiOjE3MTAyNDY1Mjh9.pNCuUTM2LTCLVaihHKaTB3_KM69OvPZFufsBgDydGFM

## Learn More

This is a personal project for personal use only.

You can register and login new accounts into the server, create data and vinyls for sale.

all users can add cards to their favorite list

Admins have permissions to change and edit everything.

this is a NodeJS server for handling a virtual second hand store for selling vinyls.

users can upload their second hand vinyl with an asking price and publish their contact information looking to sell those.

use the endpoints accordingly.
