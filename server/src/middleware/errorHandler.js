const customError = require("../errors/customError");
const errorHandler = (error, req, res, next) => {
  if (error instanceof customError) {
    return res.status(error.statusCode).json({ message: error.message });
  }
  return res.status(500).send(error);
};
module.exports = errorHandler;
