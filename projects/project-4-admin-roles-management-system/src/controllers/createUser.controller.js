const createUser = require("../services/createUser.service");

const createUserController = async (req, res) => {
  const { email, password, name } = req.body;
  const customToken = await createUser({ name, email, password });

  res.status(200).json(customToken);
};

module.exports = createUserController;
