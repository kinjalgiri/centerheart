/**
 * Define all your API web-routes
 *
 * @author Kinjalgiri Goswami <kinjalgiri@gmail.com>
 */

import { Router } from "express";
import expressJwt from "express-jwt";

import Locals from "../providers/Locals";

import HomeController from "../controllers/Api/Home";
import LoginController from "../controllers/Api/Auth/Login";
import RegisterController from "../controllers/Api/Auth/Register";
import RefreshTokenController from "../controllers/Api/Auth/RefreshToken";

const router = Router();

router.get("/", HomeController.index);

router.post("/auth/login", LoginController.perform);
router.post("/auth/register", RegisterController.perform);
router.post(
  "/auth/refresh-token",
  expressJwt({ secret: Locals.config().appSecret, algorithms: ["RS256"] }),
  RefreshTokenController.perform
);

export default router;
