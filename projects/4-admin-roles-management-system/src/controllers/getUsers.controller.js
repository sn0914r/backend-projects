const getUsers = require("../services/getUsers.service");

const getUsersControllers = async (req, res) => {
  const users = await getUsers();
  return res.status(200).json(users);
};

module.exports = getUsersControllers;
