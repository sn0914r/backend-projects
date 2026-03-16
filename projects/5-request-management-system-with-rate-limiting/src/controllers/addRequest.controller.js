const addRequest = require("../services/addRequest.service");

/**
 * Creates a request
 */
const addRequestController = async (req, res, next) => {
  const { title, description } = req.body;
  const { uid } = req.user;

  const id = await addRequest(title, description, uid);

  res.status(201).json(id);
};

module.exports = addRequestController;
