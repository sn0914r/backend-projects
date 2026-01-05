const AppError = require("../errors/AppError.error");
const { db } = require("../config/firebase.config");

const deletePost = async (req, res) => {
  const id = req.params.id;

  try {
    const ref = await db.collection(process.env.FIRESTORE_COLLECTION).doc(id);
    const snap = await ref.get();

    if (!snap.exists) {
      throw new AppError("Document Not found", 404);
    }

    if (snap.data().userId !== req.body.userId) {
      throw new AppError("Unauthorized", 403);
    }

    await ref.delete();

    res.status(200).json({
      success: true,
      message: "resource deleted",
    });
  } catch (error) {

    if (error instanceof AppError) {
      throw error;
    }
    
    throw new AppError(error.message || "Failed to delete post", 500);
  }
};

module.exports = deletePost;
