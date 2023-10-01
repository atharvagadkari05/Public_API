import jwt from "jsonwebtoken";

const verifyauth = async (req, res, next) => {
  const token = req.header('x-token');

  if (!token) {
    return res.status(400).json({
      message: "Unauthorized",
      success: false,
    });
  }

  try {
    const decoded = jwt.sign(token, "sdfsnisdnjsnfjsdnfjsdnfjk");
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({
      msg: "Access Denied",
      success: false,
    });
  }
};

export default verifyauth