const { db } = require("../config/firebase.config");
const sendSuccessMail = require("./mail.service");

const handleUploads = async ({
  filename,
  originalname,
  mimetype,
  size,
  path,
  uid,
  email,
}) => {
  const uploadedAt = new Date();
  let sizeMB = size / (1024 * 1024);
  sizeMB = `${sizeMB.toFixed(2)} MB`;

  const ref = await db.collection("project3").add({
    uid,
    email,
    filename,
    originalname,
    filetype: mimetype,
    size: sizeMB,
    path,
    uploadedAt,
  });

  await sendSuccessMail({
    filename,
    mimetype,
    size: sizeMB,
    uploadedAt,
    email,
    uploadId: ref.id,
  });

  const record = await db.collection("project3").doc(ref.id).get();

  return record.data();
};

module.exports = handleUploads;
