import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(400).json({ message: "token not found" });
    }

    const decodeToken = jwt.verify(token, process.env.JWT_SECRET);

    // console.log("Decoded Token:", decodeToken);

    req.userId = decodeToken.userId || decodeToken.id;

    next();
  } catch (error) {
    console.log("JWT ERROR:", error.message);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

export default isAuth;
