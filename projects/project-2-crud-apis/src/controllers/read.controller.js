const { db } = require("../config/firebase.config");
const AppError = require("../errors/AppError.error");

const readPosts = async (req, res) => {
  const { userId } = req.body;

  try {
    const snap = await db
      .collection(process.env.FIRESTORE_COLLECTION)
      .where("userId", "==", userId)
      .get();

    const posts = snap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.status(200).json({
      success: true,
      message: "all posts retrived",
      data: posts,
    });
  } catch (error) {
    throw new AppError(error);
  }
};
const readPostById = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const docu = await db
      .collection(process.env.FIRESTORE_COLLECTION)
      .doc(id)
      .get();

    if (!docu.exists) {
      throw new AppError("Required Document not Found", 404);
    }

    if (docu.data().userId !== req.body.userId) {
      throw new AppError("Unauthorized", 403);
    }

    const data = {
      id: docu.id,
      ...docu.data(),
    };

    res.status(200).json({
      success: true,
      message: "successfully retrived",
      data: [data],
    });
  } catch (error) {
    if (error instanceof AppError) {
      throw error;
    }

    throw new AppError(error.message || "Failed to delete post", 500);
  }
};

module.exports = { readPosts, readPostById };
