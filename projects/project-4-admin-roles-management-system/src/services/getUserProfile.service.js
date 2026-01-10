const { db } = require("../configs/firebase.configs");
const AppError = require("../errors/AppError");

const getUserProfile = async (id) => {
  const snap = await db.collection("project4").doc(id).get();

  if (!snap.exists) {
    throw new AppError("user not found", 404);
  }

  const userInfo = snap.data();
  return userInfo;
};

module.exports = getUserProfile;
