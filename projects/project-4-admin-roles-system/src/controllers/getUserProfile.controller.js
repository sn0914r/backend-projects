const { db } = require("../configs/firebase.configs");
const asyncErrorHandler = require("../utils/asyncErrorHandler");

const getUserProfile = asyncErrorHandler(async (req, res, next) => {
  const uid = req.decoded.uid;

  try {
    const snap = await db.collection("p4Users").doc(uid).get();
    const userInfo = snap.data();

    res.status(200).json({
      success: true,
      message: "user details retrived",
      data: userInfo,
    });
  } catch (error) {
    next(new AppError(error, 500));
  }
});

module.exports = getUserProfile;
