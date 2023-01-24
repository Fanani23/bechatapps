# Seed Chat App - Backend

## Table of Contents

- [About the Project](#about-the-project)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Demo]
  - [x] [API Reference - Users](#api-reference---users)
  - [ ] [API Reference - Message](#api-reference---message)
- [Related Project](#related-project)
- [Contact](#contact)

## About The Project

Seed Chat App is a website that is used to send messages to all users in real time. This Telegram app uses socket.io technology which can send and receive messages in real time plus it uses React JS so that without reloading the browser we can get the latest messages from our interlocutors in the application.

## Run Locally

Clone the project

```bash
  git clone https://github.com/Fanani23/bechatapps.git
```

Go to the project directory

```bash
  cd befoodapp
```

Install dependencies

```bash
  npm install
```

Setup .env copy from .env.example

```bash
  DB_USER=
  DB_HOST=
  DB_NAME=
  DB_PASS=
  DB_PORT=

  SECRET_KEY=
  PORT=

  PHOTO_CLOUD_NAME=
  PHOTO_KEY=
  PHOTO_SECRET=
```

Start the server

```bash
  npm run dev
```

## Demo

API deploy

```bash
https://bechatapps.vercel.app/
```

## API Reference - Users

<details>
<summary>Show</summary>
<br>

#### Register

```
  POST /users/register
```

Field body form

| Field      | Type     | Description                     |
| :--------- | :------- | :------------------------------ |
| `name`     | `string` | **Required**. name              |
| `email`    | `string` | **Required**. with format email |
| `password` | `string` | **Required**. password          |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": {
    "email": "virtuous@gmail.com"
  },
  "message": "register success please check your email"
}
```

#### Login

```
  POST /users/login
```

Field body form

| Field      | Type     | Description                     |
| :--------- | :------- | :------------------------------ |
| `email`    | `string` | **Required**. with format email |
| `password` | `string` | **Required**. password          |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": {
    "id": "7d31d6e5-acbb-450e-8f81-966b91788b69",
    "username": "Virtuous",
    "email": "virtuous@gmail.com",
    "photo": "https://res.cloudinary.com/dnu5su7ft/image/upload/v1674072858/telegram-app/Group_1233_zwi1oy.png",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdkMzFkNmU1LWFjYmItNDUwZS04ZjgxLTk2NmI5MTc4OGI2OSIsInVzZXJuYW1lIjoiSGVsbWkgUHJhZGl0YSIsImVtYWlsIjoiaGVsbWlwcmFkaXRhYUBnbWFpbC5jb20iLCJpYXQiOjE2NzQ0MzA5NTUsImV4cCI6MTY3NDQzNDU1NX0.DZ0MfjPAL_blE1Hd_c6BQy7Y7kDZxLJZ897FztYRNzc",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdkMzFkNmU1LWFjYmItNDUwZS04ZjgxLTk2NmI5MTc4OGI2OSIsInVzZXJuYW1lIjoiSGVsbWkgUHJhZGl0YSIsImVtYWlsIjoiaGVsbWlwcmFkaXRhYUBnbWFpbC5jb20iLCJpYXQiOjE2NzQ0MzA5NTUsImV4cCI6MTY3NDUxNzM1NX0.vDJ6FTYxSRV-OyQUG-iperinVnxG1WBdL9BGUFJnAqc"
  },
  "message": "login success"
}
```

#### Edit profile user

```
  PUT /users/edit
```

Field auth

| Field    | Type     | Description                             |
| :------- | :------- | :-------------------------------------- |
| `bearer` | `string` | **Required**. token from response login |

Field body form

| Field   | Type     | Description         |
| :------ | :------- | :------------------ |
| `name`  | `string` | **Required**. name  |
| `email` | `string` | **Required**. city  |
| `photo` | `file`   | **Required**. photo |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": {
    "id": "7d31d6e5-acbb-450e-8f81-966b91788b69",
    "email": "virtuous@gmail.com",
    "photo": "https://res.cloudinary.com/dnu5su7ft/image/upload/v1674072858/telegram-app/Group_1233_zwi1oy.png"
  },
  "message": "update data users success"
}
```

#### Get all users

```
  GET /users/all
```

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": [
    {
      "id": "c6ccebf5-99dc-4851-b910-4b40075d7739",
      "username": "Virtuous",
      "email": "virtuous@gmail.com",
      "password": "$2a$10$5xP2gEbwZeJjTKJls8xV3.vhkNwb7Fzbced4hTQwf6bVxgcgvZs4u",
      "photo": "https://res.cloudinary.com/dnu5su7ft/image/upload/v1672552579/default_profile.png"
    },
    {
      "id": "496f43b2-b462-4279-a340-18cbead5a092",
      "username": "Sterben",
      "email": "sterben@gmail.com",
      "password": "$2a$10$qkIckXl/bwtNR71UJjHBzenCur9ZW9Ui7gq6Jif3SS38fCfM6eu6e",
      "photo": "https://res.cloudinary.com/dnu5su7ft/image/upload/v1672552579/default_profile.png"
    }
  ],
  "message": "get all users success"
}
```

</details>

## API Reference - Message

<details>
<summary>Show by socket IO</summary>
<br>

</details>

## Related Project

- [`Backend Project Telegram `](https://github.com/Fanani23/bechatapps)
- [`REST API Telegram`](https://bechatapps.vercel.app/)

## Contact

Contributors names and contact info Fullstack Developers

- Pramudia Syahrul Fanani [@imoody](https://github.com/Fanani23/)
