const { admin } = require("../config/firebase.config");
const { asyncErrorHandler } = require("../middlewares/error.middleware");
const AppError = require("../utils/AppError");
const register = asyncErrorHandler(async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await admin.auth().createUser({ email, password });
    const customToken = await admin.auth().createCustomToken(user.uid);

    res.status(200).json({
      isSuccess: true,
      token: customToken,
    });
  } catch (error) {
    console.log(error);
    throw new AppError(error);
  }
});

module.exports = register;
