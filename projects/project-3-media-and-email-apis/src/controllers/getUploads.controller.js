const getUploads = require("../services/getUploads.services");

const getUploadsController = async (req, res) => {
  const { uid } = req.user;

  const uploads = await getUploads(uid);
  res.status(200).json(uploads);
};

module.exports = getUploadsController;
