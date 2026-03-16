const { admin } = require("../config/firebase.config");

const verifyAuth = asyncErrorHandler(async (req, res, next) => {
  if (!req.headers?.authorization?.startsWith("Bearer ")) {
    res.statusCode = 401;
    throw new Error("Authorization token missing");
  }

  const idToken = req.headers.authorization.split(" ")[1];
  const decodedToken = await admin.auth().verifyIdToken(idToken);
  req.usrerId = decodedToken.uid;
  next();
});

module.exports = verifyAuth;
