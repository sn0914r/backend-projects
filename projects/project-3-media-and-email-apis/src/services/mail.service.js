const transporter = require("../config/nodemailer.config");

const sendSuccessMail = async ({
  filename,
  mimetype,
  size,
  uploadedAt,
  email,
  uploadId,
}) => {
  const mailOptions = {
    from: process.env.GMAIL,
    to: email,
    subject: "A new file is uploaded",
    html: `
      <div class="width: 90%; max-width:500px; padding:16px;">
        <h1>A New file is Uploaded</h1>
        <p>file name: ${filename}</p>
        <p>file type: ${mimetype}</p>
        <p>size: ${size}</p>
        <p>upload ID: ${uploadId}</p>
        <p>uploadedAt: ${uploadedAt}</p>
      </div>`,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendSuccessMail;
