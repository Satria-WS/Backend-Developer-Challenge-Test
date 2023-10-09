import { Request, Response, Router } from "express";
import jwt from "jsonwebtoken";

const secretKey = "my-secret-key";
const users = [
  { id: 1, username: "admin1", password: "password1" },
  { id: 2, username: "admin2", password: "password2" },
  { id: 3, username: "admin3", password: "password3" },
];

//login user

const login = (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: "3h" });
    res.json(token);
  } else {
    res.status(401).json({ message: "Authentication failed" });
  }
};
export { login };
