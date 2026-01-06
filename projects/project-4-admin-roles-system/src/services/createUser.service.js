const { auth, db } = require("../configs/firebase.configs");
const AppError = require("../errors/AppError");

const createUserService = async (email, password) => {
  try {
    const user = await auth.createUser({ email, password });
    const userRecord = {
      userUID: user.uid,
      email: user.email,
      role: "user",
      createdAt: new Date(),
      password: password,
    };

    await auth.setCustomUserClaims(user.uid, {
      role: "user",
    });

    await db.collection("p4Users").doc(user.uid).set(userRecord);

    const customToken = await auth.createCustomToken(user.uid);
    
    return {
      uid: user.uid,
      token: customToken,
    };
  } catch (error) {
    throw new AppError(error, 500);
  }
};

module.exports = createUserService;
