var jwt = require("jsonwebtoken");
const JWT_SECRET = "Himanshiisagood$girl";

const fetchuser = (req, res, next) => {
  //get the user from the jwt token and apprnd and add id to req object
  const token = req.header("auth-token");
  if (!token) {
    res
      .status(401)
      .send({ error: "Please authenticate using a valide token " });
    return;
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    res
      .status(401)
      .send({ error: "Please authenticate user using a valid token" });
    return;
  }
};
module.exports = fetchuser;
