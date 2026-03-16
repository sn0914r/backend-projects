const patchRequest = require("../services/patchRequest.service");

/**
 * Updates a request
 */
const patchRequestController = async (req, res, next) => {
  const { id } = req.params;
  const { status } = req.body;

  const request = await patchRequest(id, status);

  res.status(200).json(request);
};

module.exports = patchRequestController;
