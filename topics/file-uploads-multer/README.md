# File Uploads

File upload system using Multer, Cloudinary and PostgreSQL.

- Upload up to 10 images
- Maximum file size: 5MB per image
- Image metadata stored in PostgreSQL
- Cloudinary integration
- Multiple image uploads
- File deletion support

## Stack

- Node.js
- Express
- TypeScript
- PostgreSQL
- Multer
- Cloudinary

## Structure

```txt
src/
├── clients/
├── controllers/
├── errors/
├── middlewares/
├── providers/
├── routes/
├── services/
├── utils/
├── app.ts
└── server.ts
```

## Upload Flow

1. Client sends multipart/form-data request
2. Multer validates files
3. Files uploaded to Cloudinary using memory storage
4. Metadata stored in PostgreSQL
5. Uploaded file data returned in response

## Stored File Metadata

- filename
- mimetype
- size
- url
- public_id
- created_at

## Features

- Multiple image uploads
- File size validation
- Image-only uploads
- Cloudinary upload integration
- Get all uploaded files
- Get single file metadata
- Delete uploaded file

## Delete Flow

1. Receive file ID
2. Find file metadata in DB
3. Delete image from Cloudinary using public_id
4. Delete metadata from PostgreSQL
5. Return success response

## Security Notes

- File type validation enabled
- File size limits enforced
- Cloudinary public_id used for secure deletion
- Parameterized SQL queries used