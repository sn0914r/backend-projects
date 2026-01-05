const { db, ADMIN } = require("../config/firebase.config");
const AppError = require("../errors/AppError.error");
const addPost = async (req, res) => {
  console.log(req.body)
  try {
    const ref = await db.collection(process.env.FIRESTORE_COLLECTION).add({
      ...req.body,
      timeStamp: ADMIN.firestore.FieldValue.serverTimestamp(),
    });

    res.status(201).json({
      success: true,
      message: "Resource added successfully",
      id: ref.id,
    });
  } catch (error) {
    throw new AppError(error);
  }
};

module.exports = addPost;
