const setAdmin = require("../services/setAdmin.service");

const setAdminController = async (req, res) => {
  const { id } = req.params;

  const updateUser = await setAdmin(id);
  res.status(200).json(updateUser);
};

module.exports = setAdminController;
