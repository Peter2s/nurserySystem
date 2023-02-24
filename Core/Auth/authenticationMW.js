const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  try {
    const token = req.get("authorization").split(" ")[1];
    const decodeToken = jwt.verify(token, process.env.SECRET_KEY);
    req.id = decodeToken.id;
    req.role = decodeToken.role;
    next();
  } catch (err) {
    next(err);
  }
};
module.exports.checkAdmin = (req, res, next) => {
  if (req.role == "admin") next();
  else {
    const error = new Error("not authorized ");
    error.status = 403;
    next(error);
  }
};

module.exports.checkTeacherAndAdmin = (req, res, next) => {
    if (req.role == "admin" || "teacher") next();
    else {
      const error = new Error("not authorized ");
      error.status = 403;
      next(error);
    }
  };
