# User Management API

This is an API for managing user accounts. It provides endpoints to create, retrieve, update, and delete user information.

## Prerequisites

Before running the project, make sure you have the following installed:

- [Node.js](https://nodejs.org)
- [MongoDB](https://www.mongodb.com) (Make sure MongoDB is running on the default port 27017)

## Getting Started

To get started with the User Management API, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/mariamzhamakochyan/UserManagementApi.git
```

2. Navigate to the project directory:

```bash
cd UserManagementApi
```

3. Install the dependencies:

```bash
npm install
```

4. Set up the environment variables:

   - Create a new `.env` file in the project root directory.
   - Open the `.env` file and add the following:

     ```plaintext
     PORT=3000
     MONGODB_URI=mongodb://localhost:27017/mydatabase
     ```

     Replace `mongodb://localhost:27017/mydatabase` with your MongoDB connection URI if necessary.

5. Start the server:

```bash
npm start
```

6. The API server should now be running. You can access it at [http://localhost:3000](http://localhost:3000).

## API Endpoints

The following endpoints are available in the API:

- POST /api/users - Create a new user
- GET /api/users - Get all users
- GET /api/users/:id - Get a specific user by ID
- PUT /api/users/:id - Update a user by ID
- DELETE /api/users/:id - Delete a user by ID

## Technologies Used

- [Node.js](https://nodejs.org) - A JavaScript runtime environment
- [Express](https://expressjs.com) - A web application framework for Node.js that handles routing and middleware
- [MongoDB](https://www.mongodb.com) - A NoSQL database for storing user data
- [Mongoose](https://mongoosejs.com) - An Object Data Modeling (ODM) library for MongoDB that provides a convenient way to interact with the database