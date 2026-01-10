const getRequests = require("../services/getRequests.service");

/**
 * Returns a specific user's requests
 */
const getRequestsForUserController = async (req, res, next) => {
  const { uid } = req["user"];

  const requests = await getRequests(uid);
  res.status(200).json({
    size: requests.length,
    requests,
  });
};

/**
 * Returns all requests
 */
const getRequestsForAdminController = async (req, res, next) => {
  const requests = await getRequests();
  res.status(200).json({
    size: requests.length,
    requests,
  });
};

module.exports = {
  getRequestsForUserController,
  getRequestsForAdminController,
};
