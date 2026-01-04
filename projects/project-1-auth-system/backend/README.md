# Auth Basics API

A backend project demonstrating Firebase Authentication
integrated with a Node.js API, focusing on secure token
verification and protected routes.

---

## Tech Stack

- Node.js
- Express.js
- Joi
- Firebase Auth
- Firebase Admin SDK

---

## Features

- User authentication using Firebase Auth
- Backend ID token verification
- Protected API routes
- Centralized error handling

---

## API Endpoints

GET /health  
→ Public health check

POST /auth/create-user  
→ Public route (creates a new user account)

GET /auth/protected  
→ Protected route (requires Firebase ID token)

---

## Authentication Workflow

1. User registers/logs in using Firebase Auth (frontend)
2. Firebase returns an ID token
3. Frontend sends ID token to backend
4. Backend verifies token using Firebase Admin SDK
5. Protected data is returned if token is valid

---

## Environment Variables

PORT=  
FIREBASE_PROJECT_ID=  
FIREBASE_CLIENT_EMAIL=  
FIREBASE_PRIVATE_KEY=

---

## Run Locally

```bash
npm install
npm run dev
```

## Folder Structure

```text
backend/
 ├── src/
 │   ├── config/
 │   ├── controllers/
 │   ├── middlewares/
 │   ├── routes/
 │   ├── validations/
 │   ├── utils/
 │   ├── app.js
 │   └── server.js
 ├── package.json
 └── README.md

demo-ui/
 ├── script/
 └── index.html
```

## status

**completed**
