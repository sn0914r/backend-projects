const handleUploads = require("../services/handleUploads.service");

const uploadFileController = async (req, res) => {
  const { filename, originalname, mimetype, size, path } = req.file;
  const { uid, email } = req.user;

  const uploadRecord = await handleUploads({
    filename,
    originalname,
    mimetype,
    size,
    path,
    uid,
    email,
  });

  res.status(200).json(uploadRecord);
};

module.exports = uploadFileController;
