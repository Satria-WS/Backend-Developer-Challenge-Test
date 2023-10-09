import { json } from "body-parser";
import { verifyToken } from "../middleware/authMiddleware";
import { login } from "../controllers/authController";
import { clockIn, clockOut } from "../controllers/attendController";


 function initRoutes(app) {
  

  app.use(json())
  app.use(verifyToken);

  app.use('/api/login', login)
  app.use('/api/clockin', clockIn)
  app.use('/api/clockout' ,clockOut)
}



export { initRoutes };
