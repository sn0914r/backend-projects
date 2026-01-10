← Back to [All Projects](../../README.md)


# Simple Auth API

A small backend project demonstrating Firebase Authentication
integrated with a Node.js API, focusing on secure token
verification and protected routes.

---

## Tech Stack

- Node.js
- Express.js
- Firebase Admin SDK (Firbase Authentication)

---

## Features

- User authentication using Firebase Auth
- Backend ID token verification
- Protected API routes

---

## API Endpoints

`GET /health`  
→ Public health check

`GET /auth/protected`  
→ Protected route (requires Firebase ID token to view the protected content)

---

## Workflow

1. The server stores a secret message.
2. To access the secret message, the user sends a `GET` request to a protected route `/protected`.
3. The request must include Firebase ID authentication.
4. If authentication is missing or invalid, the secret message is not returned.
5. If authentication is valid, the server returns the secret message.

---

## Environment Variables

```bash
PORT=

FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
```

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
 │   ├── middlewares/
 │   ├── routes/
 │   ├── app.js
 │   └── server.js
 ├── package.json
 └── README.md
```

## status

**completed**
