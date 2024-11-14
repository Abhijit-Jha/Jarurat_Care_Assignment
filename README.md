# Healthcare Service Management API

This is a simple API created using Node.js, Express, and MongoDB to manage a list of healthcare services. The API allows you to perform CRUD operations (Create, Read, Update, and Delete) on healthcare services.

## Features

- **Create a new service**: Allows adding a new healthcare service with a name, description, and price.
- **Get all services**: Retrieves a list of all available services.
- **Update a service**: Allows modification of an existing service's details.
- **Delete a service**: Allows removal of a service from the list.

## Technology Stack

- **Node.js**: JavaScript runtime for building the API.
- **Express.js**: Framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing healthcare service data.
- **Zod**: Schema validation for ensuring data integrity.

## Installation

## Steps to Run the Project

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Abhijit-Jha/Jarurat_Care_Assignment.git
   ```

2. **Install the packages**:

   ```bash
   npm install
   ```

3. **Get a MongoDB URL**:

   - Either use MongoDB Atlas (https://www.mongodb.com/cloud/atlas) by creating a free cluster and obtaining the connection URL.
   - Or use Docker to run MongoDB locally. You can follow this guide to set it up: https://hub.docker.com/_/mongo

4. **Add the DB URL** in the `.env` file under the variable `MONGODB_URI`. Check ``.env.example`` for reference

5. **Run the application**:

   ```bash
   node ./route.ts
   ```

## Endpoints

## Base URL

The base URL for this API is:
http://localhost:3000/api/v1/health

### 1. **Get all services**
   - **Method:** `GET`
   - **Endpoint:** `/`
   - **Description:** Retrieves a list of all healthcare services in the database.
   - **Request:**
     - No request body required.
   - **Response Example:**
     ```json
     [
       {
         "_id": "6736136055d84a264d7f02d7",
         "name": "Service 1",
         "description": "service",
         "price": 1222,
         "serviceId": "9154f701-0f7b-4d18-85c8-47a0a502849d",
         "__v": 0a
       },
       {
         "_id": "67361360125d84a264d7f02d7",
         "name": "Service 2",
         "description": "service",
         "price": 1222,
         "serviceId": "9154f701-0f7b-4d12-85c8-47a0a502849d",
         "__v": 0
       }
     ]
     ```


### 2. **Add a new service**

- **Method:** `POST`
- **Endpoint:** `/`
- **Description:** Adds a new healthcare service to the database.
- **Request Body:**
  ```json
  {
    "name": "New Service",
    "description": "Service Description",
    "price": 50
  }
  ```
- **Response Example:**
  ```json
  {
    "message": "Created"
  }
  ```

### 3. **Update an existing service**

- **Method:** `PATCH`
- **Endpoint:** `/:serviceId`
- **Description:** Updates the details of an existing service based on `serviceId`. You can get the serviceId From the database or from get request.
- **Request Body:**
  ```json
  {
    "name": "Updated Service Name",
    "description": "Updated Service Description",
    "price": 75
  }
  ```
- **Response Example:**
  ```json
  {
    "message": "Service updated successfully",
    "updatedService": {
      "serviceId": "12345",
      "name": "Updated Service Name",
      "description": "Updated Service Description",
      "price": 75
    }
  }
  ```

### 4. **Delete a service**

- **Method:** `DELETE`
- **Endpoint:** `/:serviceId`
- **Description:** Deletes an existing service based on `serviceId`. You can get the serviceId From the database or from get request.
- **Response Example:**
  ```json
  {
    "message": "Service deleted successfully",
    "service": {
      "serviceId": "9154f701-0f7b-4d12-85c8-47a0a502849d",
      "name": "Service Name",
      "description": "Service Description",
      "price": 100
    }
  }
  ```
