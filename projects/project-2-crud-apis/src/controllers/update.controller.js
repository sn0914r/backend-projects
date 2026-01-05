const { db } = require("../config/firebase.config");
const AppError = require("../errors/AppError.error");

const updatePost = async (req, res) => {
  const { id } = req.params;

  try {
    await db
      .collection(process.env.FIRESTORE_COLLECTION)
      .doc(id)
      .update(req.body);

    res.status(200).json({
      success: true,
      message: "Resource updated",
    });
  } catch (error) {
    throw new AppError(error);
  }
};
module.exports = updatePost;
