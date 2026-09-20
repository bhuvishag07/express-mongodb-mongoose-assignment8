# Express.js, MongoDB and Mongoose — Create and Retrieve Users

## Student Details

 **Name:** Bhuvisha Gohil
  
 **Roll Number:** 150096725190
  
 **Course:** B.Tech CSE
  
 **Subject:** Backend Development 
  
 **Assignment:** 8

---

## 1. Introduction

This assignment demonstrates how to create and retrieve user data using **Express.js, MongoDB, and Mongoose**.

The application provides APIs to:

* Create a new user
* Store user data in MongoDB
* Retrieve all users from MongoDB
* Check whether the server is running

---

## 2. Objective

The main objectives of this assignment are:

* To create an Express.js application.
* To connect Express.js with MongoDB using Mongoose.
* To create a Mongoose schema for user data.
* To separate schema, model, routing, and database connection logic.
* To insert user data into MongoDB.
* To retrieve stored user data from MongoDB.
* To test the APIs using Thunder Client.

---

## 3. Folder Structure

The project is organized into separate folders for better management of the application.

**Folder Structure Screenshot:**

<img width="388" height="500" alt="D98600F0-86BD-46C1-B3A6-6558D8320DD6" src="https://github.com/user-attachments/assets/88883640-b067-4e03-89af-fb7fa0c68f68" />


---

## 4. Technologies Used

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **JavaScript**
* **Thunder Client**
* **MongoDB Compass**

---

## 5. MongoDB Connection

MongoDB is connected using Mongoose.

The application uses the following MongoDB database:

```text
mongodb://127.0.0.1:27017/assignment8
```

The database name is:

```text
assignment8
```

When the server starts successfully, the terminal displays:

```text
MongoDB connected successfully
Server is running on port 5500
```



## 6. User Schema

### User Schema

A user schema is created using Mongoose.

The user contains the following fields:

| Field    | Data Type | Required |
| -------- | --------- | -------- |
| name     | String    | Yes      |
| email    | String    | Yes      |
| age      | Number    | Yes      |
| course   | String    | Yes      |
| password | String    | Yes      |

The schema defines the structure and data types of the user information stored in MongoDB.

The email field is also set as unique to avoid duplicate email addresses.

---

## 7. Create User API
## Create User API

A POST API is used to create and store a new user in MongoDB.

### API

```text
POST http://localhost:5500/api/users
```

### Request Body

```json
{
  "name": "Bhuvisha",
  "email": "bhuvisha2@gmail.com",
  "age": 19,
  "course": "B.Tech CSE",
  "password": "12345"
}
```

### Response

```text
User created successfully
```

### Response

```text
data send successfully
```



---

## 8. Data Stored in MongoDB

After sending the POST request, the user data is stored in the `assignment8` database in MongoDB.

The stored document contains the user's name, email, password, and the automatically generated MongoDB `_id`.



## 9. Retrieve Users API

## Retrieve Users API

A GET API is used to retrieve all the users stored in MongoDB.

### API

```text
GET http://localhost:5500/api/users
```

### Response

The API returns all the users stored in the MongoDB database in JSON format.

Example:

```json
[
  {
    "_id": "68c...",
    "name": "Bhuvisha",
    "email": "bhuvisha2@gmail.com",
    "age": 19,
    "course": "B.Tech CSE",
    "password": "12345"
  }
]
```



## 10. Home API

A simple GET route is also created to check whether the API is working.

### API

```text
GET http://localhost:5500/api/home
```

### Response

```text
this is home page
```

---

## 11. How to Run the Project

Open the terminal and move to the project folder:

```bash
cd "/Users/bhuvishagohil/Desktop/node js assignments/Assignment 8"
```

Install the required packages:

```bash
npm install express
npm install mongoose
npm install --save-dev nodemon
```

Start the server:

```bash
npx nodemon server.js
```

The server runs on:

```text
http://localhost:5500
```

---

## 12. API Testing

The APIs were tested using **Thunder Client**.

### Available APIs

| Method | Endpoint        | Purpose                 |
| ------ | --------------- | ----------------------- |
| GET    | `/api/home`     | Check home route        |
| POST   | `/api/sendData` | Create and store a user |
| GET    | `/api/getData`  | Retrieve all users      |

---

## 13. Screenshots

The following screenshots demonstrate the successful execution of the assignment:

### Screenshot 1 — MongoDB Connection

<img width="882" height="314" alt="483901D0-3A10-4102-BEF4-819DD3C6B163_4_5005_c" src="https://github.com/user-attachments/assets/62e84966-c043-428e-8fd7-899574613002" />


### Screenshot 2 — POST Request

<img width="1928" height="786" alt="669839DE-196C-4502-A9CF-B502E8592FC5" src="https://github.com/user-attachments/assets/a6a7fc42-1b45-4f74-9129-e9ffa0a7cf0b" />



### Screenshot 3 — MongoDB Stored Data

<img width="2146" height="1040" alt="A70EE860-A589-4959-8FCD-4354AC88FA14" src="https://github.com/user-attachments/assets/dc716fb1-6933-425d-a8a7-339f00094929" />



### Screenshot 4 — GET Request

<img width="2046" height="982" alt="755AE368-A215-44C9-BD27-CF4E9E329A5A" src="https://github.com/user-attachments/assets/13033adc-457c-41c0-a093-fe7fcc97e30a" />



---

## 14. Learning Outcome

Through this assignment, I learned how to:

* Create an Express.js server.
* Connect an application to MongoDB using Mongoose.
* Create and use a Mongoose schema.
* Create a Mongoose model.
* Organize backend code into separate files and folders.
* Handle POST requests.
* Handle GET requests.
* Store data in MongoDB.
* Retrieve data from MongoDB.
* Test REST APIs using Thunder Client.

---

## 15. Conclusion

This assignment successfully demonstrates the integration of **Express.js, MongoDB, and Mongoose** to create and retrieve user data.

The application stores user information in MongoDB through a POST request and retrieves the stored information through a GET request. The project also follows a structured approach by keeping the schema, model, routing, and database connection in separate files.
