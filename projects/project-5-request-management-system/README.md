# Request Management API

A backend project demonstrating role-based authorization, rate limiting,
and a real-world request workflow using Firebase Authentication.

---

## Tech Stack

- Node.js
- Express.js
- Joi
- express-rate-limit
- Firebase Admin SDK
- Firebase Auth
- Firestore

---

## Features

- Auth-protected APIs
- Role-based access control (user / admin)
- Rate limiting on request creation
- Request status workflow
- Centralized error handling

---

## API Endpoints

GET /health  
→ Public health check

POST /requests  
→ Protected route (creates a new request)

GET /requests  
→ Protected route (retrieves requests of the authenticated user)

GET /admin/requests  
→ Admin-only route (retrieves all requests)

PATCH /admin/requests/:id  
→ Admin-only route (updates request status)

---

## Workflow

1. Authenticated user creates a request
2. User can view only their own requests
3. Admin can view all requests
4. Admin updates request status (approved / rejected)

---

## Roles

### User

- Can create requests
- Can view only their own requests
- Cannot update request status

### Admin

- Can view all requests
- Can update request status
- Cannot create requests (kept simple)

## Environment Variables

```.env
PORT = 3000

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

## status

**completed**
