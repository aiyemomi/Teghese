const customAPIError = require("../errors/customError");
const errorHandler = (error, req, res, next) => {
  if (error instanceof customAPIError) {
    return res.status(error.statusCode).json({ msg: error.message });
  }
  return res.status(500).send(error);
};
module.exports = errorHandler;
