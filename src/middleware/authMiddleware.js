import jwt from "jsonwebtoken";

const secretKey = 'my-secret-key'

export const verifyToken = (req, res, nex) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(403).json({message: 'Token not found'})
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({message: "Autentifikasi failed"})
    }

    req.user.Id = decoded.userId;
    next();
  })

}