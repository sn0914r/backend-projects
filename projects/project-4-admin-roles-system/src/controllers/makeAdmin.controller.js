const { auth } = require("../configs/firebase.configs");
const updateRecord = require("../services/updateRecord.service");
const asyncErrorHandler = require("../utils/asyncErrorHandler");

const makeAdmin = asyncErrorHandler(async (req, res, next) => {
  //   const { uid } = req.decoded;
  const { uid } = req.body;

  // console.log(uid);
  await auth.setCustomUserClaims(uid, {
    role: "admin",
  });

  console.log("done");
  await updateRecord(uid, { role: "admin" });

  res.status(200).json({
    success: true,
    id: uid,
    message: "role updated to admin",
  });
});

module.exports = makeAdmin;
