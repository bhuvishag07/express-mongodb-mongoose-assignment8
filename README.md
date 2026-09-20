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

<img width="370" height="580" alt="image" src="https://github.com/user-attachments/assets/b9618180-f4f3-40ab-93b5-25ff170e4ac1" />


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

A user schema is created using Mongoose.

The user contains the following fields:

| Field    | Data Type | Required |
| -------- | --------- | -------- |
| name     | String    | Yes      |
| email    | String    | Yes      |
| password | String    | Yes      |

The email field is also set as unique to avoid duplicate email addresses.

---

## 7. Create User API

A POST API is used to create and store a new user in MongoDB.

### API

```text
POST http://localhost:5500/api/sendData
```

### Request Body

```json
{
  "name": "Bhuvisha",
  "email": "bhuvisha@gmail.com",
  "password": "12345"
}
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

A GET API is used to retrieve all the users stored in MongoDB.

### API

```text
GET http://localhost:5500/api/getData
```

### Response

The API returns the users stored in the MongoDB database.

Example:

```json
[
  {
    "_id": "generated_id",
    "name": "Bhuvisha",
    "email": "bhuvisha@gmail.com",
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

<img width="2118" height="1384" alt="F7D71243-6753-4F61-B52E-4D62627AD933" src="https://github.com/user-attachments/assets/13fd974d-20ab-44fd-9199-48f0bea863d6" />


### Screenshot 3 — MongoDB Stored Data

<img width="2190" height="992" alt="593620C8-CDE3-471C-BF0E-B8DF0FA5C91C" src="https://github.com/user-attachments/assets/ef01bfb8-35f2-4063-94a7-7779c37fc750" />


### Screenshot 4 — GET Request

<img width="2084" height="570" alt="CE57D46B-9289-4EA0-B925-A9A424A43806" src="https://github.com/user-attachments/assets/b3345d68-25d2-4f71-97f5-60c72587c299" />


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
