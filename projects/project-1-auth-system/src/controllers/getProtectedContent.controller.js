const getProtectedContentController = (req, res) => {
  const { email } = req.user;
  const SECRET_MESSAGE = `The Secret message is HELLO ${email}`;
  res.status(200).json({
    secret_message: SECRET_MESSAGE,
  });
};

module.exports = getProtectedContentController;
