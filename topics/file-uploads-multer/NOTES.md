# Multer

1. Multer is Express middleware used to handle multipart/form-data, mainly for file uploads. It parses uploaded files from incoming requests and makes them available in req.file or req.files so we can validate them or upload them to services like Cloudinary or S3.

2. Express cannot handle file uploads by default, so multer sits between the request and controller, processes uploaded files, and supports features like storage configuration, file validation, and size limits.

3. In simple terms, Multer is middleware for handling file uploads in Express applications.

## Types of storages

1. Disk Storage — stores uploaded files physically on the server filesystem.
2. Memory Storage — stores uploaded files temporarily in RAM as buffers.

### Disk Storage

1. To implement disk storage in Multer, we use `multer.diskStorage()` and configure two things:
   - destination → where files should be stored
   - filename → how uploaded files should be named

Then we pass that storage configuration into multer middleware.

```js
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });
```

#### Single file

```js
router.post("/profile", upload.single("avatar"), controller);
```

#### Multiple Files

```js
router.post("/products", upload.array("images", 5), controller);
```

### Memory Storage

1. To implement memory storage in Multer, we use multer.memoryStorage() and pass it into multer configuration. Instead of saving files on disk, multer stores uploaded files in memory as buffers during request processing.

```js
import multer from "multer";

const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});
```

2. After upload, the file becomes available as req.file.buffer, which can be directly uploaded to cloud storage services like Cloudinary or AWS S3.

## Validation

1. In Multer, file validation is commonly done using fileFilter and limits.
   - fileFilter is used to validate file types
   - limits is used to restrict file size

```js
const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed"));
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});
```

## Multer file object structure

### Disk Storage File Object

```js
{
  fieldname: "files",
  originalname: "photo.png",
  encoding: "7bit",
  mimetype: "image/png",

  destination: "uploads/",
  filename: "1716532323-photo.png",
  path: "uploads/1716532323-photo.png",

  size: 12345
}
```

### Memory Storage File Object

```js
{

  fieldname: "files",
  originalname: "photo.png",
  encoding: "7bit",
  mimetype: "image/png",

  buffer: <Buffer ...>,

  size: 12345

}
```
