#  Lab 1: Basic Login System

##  Overview
This lab implements the core authentication system for Innovate Inc.’s user portal. The goal is to build a simple Express API that allows users to register with hashed passwords and login to receive a JWT token for session management. This foundational system will later support more complex features like user dashboards and role-based access.

##  Workplace Context
Authentication is a critical feature in modern web applications. This lab simulates a real-world scenario where a company needs to secure user data and manage sessions safely using industry-standard practices like bcrypt for password hashing and JWTs for token-based authentication.

##  Learning Objectives
By the end of this lab, you will be able to:

* Set up an Express server connected to MongoDB.
* Implement secure user registration and login endpoints.
* Hash passwords using bcrypt.
* Generate and validate JWT tokens for authentication.
* Handle common error scenarios such as duplicate registrations and invalid credentials.

##  Description

This lab focuses on creating two main endpoints:

- Registration (POST /api/users/register)
* Accepts a username, email, and password.
* Checks if the email is already registered.
* Hashes the password before saving.
* Returns the newly created user data (excluding the password).

- Login (POST /api/users/login)
* Accepts an email and password.
* Validates the user credentials.
* Returns a signed JWT token along with user data if successful.
* Rejects invalid login attempts with a generic error message.


##  Resources

*  Express Documentation - https://expressjs.com
*  Mongoose Documentation - https://mongoosejs.com/docs/guide.html
*  bcrypt Documentation - https://www.npmjs.com/package/bcrypt
*  jsonwebtoken Documentation - https://www.npmjs.com/package/jsonwebtoken
*  dotenv Documentation - https://www.npmjs.com/package/dotenv

##  Getting Started

##  Requirements

*  Node.js v24+
*  npm
*  Git
*  A code editor (VS Code recommended)
*  MongoDB (local or cloud instance)
*  Postman or any API client for testing

##  OS Compatibility

This lab works on:

*  Windows
*  macOS
*  Linux

##  Installation

1. Clone the repository:

git clone [<repository-url>](https://github.com/KaeTheDev/Basic-Login-System.git)

2. Navigate into the project folder:

cd basic-login-system

##  Setup

1. Install dependencies:

npm install

2. Run the project:

npm run dev

## Setup

1. Create a .env file in the root directory and add the following:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

2. Run the server in development mode:
node server.js

3. The server should now be running on http://localhost:3000

##  Project Structure

basic-login-system/
├── config/
│   └── db.js           # MongoDB connection setup
├── controllers/
│   └── userController.js # Logic for register and login endpoints
├── models/
│   └── User.js         # Mongoose User schema and password hashing
├── routes/
│   └── userRoutes.js   # Express routes for user registration and login
├── .env                # Environment variables (not committed)
├── server.js           # Entry point of the server
├── package.json
└── README.md


## Endpoints
1. Register
POST /api/users/register
Request Body:
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "securepassword123"
}
Response:
{
  "_id": "user_id",
  "username": "john_doe",
  "email": "john@example.com"
}

2. Login
POST /api/users/login
Request Body:
{
  "email": "john@example.com",
  "password": "securepassword123"
}
Response:
{
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id",
    "username": "john_doe",
    "email": "john@example.com"
  }
}
Error Response (invalid credentials):
{
  "message": "Incorrect email or password."
}

## Acceptance Criteria
* Server runs without errors.
* Registration endpoint creates users with hashed passwords.
* Login endpoint validates credentials and returns a JWT.
* Invalid logins return a generic error message.
* .env and node_modules are excluded from the repository via .gitignore.