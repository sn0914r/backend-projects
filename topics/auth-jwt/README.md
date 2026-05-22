# JWT Auth

JWT authentication system using access tokens and refresh tokens.
 - Short-lived access tokens
 - Long-lived refresh tokens

## Stack

- Node.js
- Express
- TypeScript
- PostgreSQL
- JWT
- bcrypt
- crypto

## Structure

```text
src/
├── clients/
├── controllers/
├── db/
├── error/
├── middlewares/
├── routes/
├── services/
├── utils/
├── validators/
├── app.ts
└── server.ts
```

## Register Flow

1. User sends credentials
2. Validate input
3. Check if user already exists
4. Hash password
5. Save user in users table
6. Create session/refresh record in DB
7. Create access token
8. Create refresh token (contains sessionId)
9. Store hashed Refresh token in session row
10. Send:
    - refresh token in HttpOnly cookie
    - access token in JSON response

## Login Flow

1. User sends credentials
2. validate input
3. Find user
4. Compare password
5. Delete old session for user (if exists)
6. Create new session row
7. Create access token
8. Create refresh token (contains sessionId)
9. Hash refresh token
10. Save hashed token in session row
11. Send:
    - refresh token in HttpOnly cookie
    - access token in JSON response



## Refresh Flow

1. Client sends refresh token cookie
2. Backend checks if refresh token exists in cookie
3. verify refresh token
4. Extract sessionId
5. Find session
6. Hash incoming refresh token
7. Compare with stored hashed token
8. Check session expiry
9. Create new access token
10. (OPTIONAL) Create new refresh token and update session (refresh rotation)
11. Send new access token

## Logout Flow

1. Receive refresh token from cookie
2. Verify refresh token
3. Extract sessionId
4. Delete session from DB
5. Clear refresh token cookie
6. Return success response

## Security Notes

- Passwords hashed with bcrypt
- Refresh tokens hashed and stored in DB
- HTTP-only cookies used