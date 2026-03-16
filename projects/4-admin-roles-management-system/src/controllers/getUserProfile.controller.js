const getUserProfile = require("../services/getUserProfile.service");

const getUserProfileController = async (req, res) => {
  const { uid } = req.user;

  const profile = await getUserProfile(uid);
  res.status(200).json(profile);
};

module.exports = getUserProfileController;
