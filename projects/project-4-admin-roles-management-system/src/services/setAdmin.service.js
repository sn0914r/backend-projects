const { db, auth } = require("../configs/firebase.configs");
const getUserProfile = require("./getUserProfile.service");

const setAdmin = async (uid) => {
  await auth.setCustomUserClaims(uid, {
    role: "admin",
  });

  await db
    .collection("project4")
    .doc(uid)
    .update({ role: "admin", updatedAt: new Date() });

  const updatedUser = await getUserProfile(uid);
  return updatedUser;
};

module.exports = setAdmin;
