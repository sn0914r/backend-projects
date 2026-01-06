const AppError = require("../errors/AppError");
const createUserService = require("../services/createUser.service");
const asyncErrorHandler = require("../utils/asyncErrorHandler");

const createUser = asyncErrorHandler(async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const { uid, token } = await createUserService(email, password);

    res.status(200).json({
      success: true,
      uid,
      token,
    });
  } catch (error) {
    next(new AppError(error, 500));
  }
});

module.exports = createUser;
