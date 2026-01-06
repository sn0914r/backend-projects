const patchRecord = require("../services/patchRecord.service");
const asyncErrorHandler = require("../utils/asyncErrorHandler");

const patchRequest = asyncErrorHandler(async (req, res, next) => {
  const { id } = req.params;
  const { status } = req.body;

  const patchedRecord = await patchRecord(id, status);

  res.status(200).json({
    success: true,
    data: patchedRecord,
  });
});

module.exports = patchRequest;
