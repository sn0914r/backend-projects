const transporter = require("../config/nodemailer.config");

const sendMail = async (target, details) => {
  const mailOptions = {
    from: process.env.GMAIL,
    to: target,
    subject: "A new file is uploaded",
    html: `
      <div class="width: 90%; max-width:500px; padding:16px;">
        <h1>A New file is Uploaded</h1>
        <p>file name: ${details.filename}</p>
        <p>file type: ${details.fileType}</p>
        <p>size: ${details.size}</p>
        <p>upload ID: ${details.uploadId}</p>
        <p>uploadedAt: ${details.uploadedAt}</p>
      </div>`,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendMail;
