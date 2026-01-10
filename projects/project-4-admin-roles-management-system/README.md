← Back to [All Projects](../../README.md)

# Admin & Role Management API

A backend project demonstrating role-based authorization
using Firebase Authentication and custom claims.

---

## Tech Stack

- Node.js
- Express.js
- Joi
- Firebase Admin SDK (Firebase Auth and Firestore)

---

## Features

- Role-based access control
- Backend Firebase ID token verification
- User authentication using Firebase Auth
- Admin-only protected routes
- Centralized error handling

---

## API Endpoints

`GET /health`  
→ Public health check

`POST /auth/create-user`  
→ Public route (creates a new user and returns a single login custom token)

`GET /profile`  
→ Protected route (retrieves details of the authenticated user)

`POST /admin/make-admin/:id`  
→ Admin-only route (assigns admin role to a user)

`GET /admin/users`  
→ Admin-only route (retrieves all users)

---

## Workflow

1. The client sends a registration request to the backend.
2. The backend creates the user and assigns the default role as user.
3. The backend returns a custom token.
4. The client uses this custom token to sign in and obtain a Firebase ID token.
5. The admin or user sends the ID token with each request to perform operations.

---

## Roles

### Public

- Any user can create an account.

### User

- Can view their own profile.

### Admin

- Has access to admin routes.
- Can assign the admin role to other users.
- Can view all users.

---

## Environment Variables

PORT = 3000

FIREBASE_PROJECT_ID=  
FIREBASE_CLIENT_EMAIL=  
FIREBASE_PRIVATE_KEY= 

---

## Run Locally

```bash
npm install
npm start
```

---

## Folder Structure

```text
backend/
 ├── src/
 │   ├── configs/
 │   ├── controllers/
 │   ├── errors/
 │   ├── middlewares/
 │   ├── routes/
 │   ├── services/
 │   ├── validations/
 │   ├── app.js
 │   └── server.js
 ├── package.json
 ├── package-lock.json
 └── README.md

```

---

## Status

**Completed**
