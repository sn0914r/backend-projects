const AppError = require("../errors/AppError");
const { asyncErrorHandler } = require("../middlewares/errors.middleware");
const saveRecord = require("../services/saveRecord.services");
const sendMail = require("../services/sendmail.service");

const uploadController = asyncErrorHandler(async (req, res, next) => {
  const { filename, originalname, mimetype: fileType, size, path } = req.file;
  const { uid, email } = req.userDetails;
  const uploadedAt = new Date();

  try {
    const uploadId = await saveRecord({
      filename,
      originalname,
      fileType,
      size,
      userId: uid,
      uploadedAt,
    });

    await sendMail(email, {
      filename,
      fileType,
      size,
      uploadId,
      uploadedAt,
    });

    res.status(200).json({
      success: true,
      message: "file uploaded",
      data: {
        filename,
        originalname,
        fileType,
        size,
        userId: uid,
        uploadedAt,
      },
    });
  } catch (error) {
    next(new AppError(error, 500));
  }
});

module.exports = uploadController;
