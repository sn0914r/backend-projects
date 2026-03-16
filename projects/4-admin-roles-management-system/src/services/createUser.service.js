const { auth, db } = require("../configs/firebase.configs");

const createUser = async ({ email, password, name }) => {
  const timestamp = new Date();
  const user = await auth.createUser({ email, password });

  await auth.setCustomUserClaims(user.uid, {
    role: "user",
  });

  await db.collection("project4").doc(user.uid).set({
    name,
    uid: user.uid,
    email: email,
    role: "user",
    createdAt: timestamp,
    updatedAt: timestamp,
  });

  const token = await auth.createCustomToken(user.uid);
  return token;
};

module.exports = createUser;
