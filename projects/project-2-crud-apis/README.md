# CRUD API

A backend project demonstrating Firebase Firestore integrated with a Node.js API,
focusing on authenticated CRUD operations and protected routes.

---

## Tech Stack

- Node.js
- Express.js
- Joi (for validation)
- Firebase Admin SDK
- Firebase Auth
- Firestore

---

## Features

- Create, read, update, and delete posts
- User authentication using Firebase Auth
- Protected API routes
- Backend ID token verification
- Centralized error handling

---

## API Endpoints

GET /health  
→ Public health check

POST /posts  
→ Protected route (creates a new post)

GET /posts  
→ Protected route (retrieves all posts of the authenticated user)

GET /posts/:id  
→ Protected route (retrieves a specific post of the authenticated user)

PUT /posts/:id  
→ Protected route (updates a post owned by the user)

DELETE /posts/:id  
→ Protected route (deletes a post owned by the user)

---

## Workflow

1. Client sends a request to the API
2. Request data is validated using Joi (if applicable)
3. Firebase ID token is verified
4. User ID is extracted from the token
5. Operation is performed only for the authenticated user

---

## Environment Variables

PORT=  
FIREBASE_PROJECT_ID=  
FIREBASE_CLIENT_EMAIL=  
FIREBASE_PRIVATE_KEY=
FIRESTORE_COLLECTION=

---

## Run Locally

```bash
npm install
npm start
```

## Folder Structure

```text
backend/
 ├── src/
 │   ├── config/
 │   ├── controllers/
 │   ├── errors/
 │   ├── middlewares/
 │   ├── routes/
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
