← Back to [All Projects](../../README.md)

# Media Upload & Email API

A backend project demonstrating file uploads (into local folder) and email notifications
using a Node.js API, with authentication and metadata storage.

---

## Tech Stack

- Node.js
- Express.js
- Multer
- Nodemailer
- Firebase Admin SDK (Firestore)

---

## Features

- File Uploads
- Email notification on successful upload
- Auth-Protected APIs
- Centralized Error handling

---

## API Endpoints

GET /health  
-> Public health check

POST /upload  
-> Protected route (uploads a file, requires Firebase ID token)

GET /uploads  
-> Protected route (retrieves metadata of files uploaded by the authenticated user)

---

## WorkFlow

1. Client sends file along with Firebase ID token
2. Server verifies token and extracts user information
3. File is uploaded locally
4. Metadata is stored in Firestore
5. Confirmation email is sent to the user
6. Client can retrieve uploaded file metadata

---

## Environment Variables

```bash
PORT=

FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
FIRESTORE_COLLECTION=

GMAIL=
GMAIL_PASSWORD_KEY=
```

---

## Run locally

```bash
npm install
npm start
```

---

## Folder Structure

```text
backend/
 ├── src/
 │   ├── config/
 │   ├── controllers/
 │   ├── errors/
 │   ├── middlewares/
 │   ├── routes/
 │   ├── services/
 │   ├── uploads/
 │   ├── app.js
 │   └── server.js
 ├── package.json
 ├── package-lock.json
 └── README.md
```

---

## Status

**Completed**
