# Admin & Role Management API

A backend project demonstrating role-based authorization
using Firebase Authentication and custom claims.

---

## Tech Stack

- Node.js
- Express.js
- Joi
- Firebase Admin SDK
- Firebase Auth
- Firestore

---

## Features

- Role-based access control
- Backend Firebase ID token verification
- User authentication using Firebase Auth
- Admin-only protected routes
- Centralized error handling

---

## API Endpoints

GET /health  
→ Public health check

POST /auth/register  
→ Public route (creates a new user and returns a custom token)

GET /profile  
→ Protected route (retrieves details of the authenticated user)

POST /admin/make-admin  
→ Admin-only route (assigns admin role to a user)

GET /admin/users  
→ Admin-only route (retrieves all users)

---

## Workflow

1. Client sends a registration request to the backend
2. Backend creates user and sets default role as `user`
3. Backend returns a custom token
4. Client signs in and receives Firebase ID token
5. Admin sends ID token and target user UID to assign admin role
6. Admin can view all users

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
 │   ├── utils/
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
