import epxress, {Router} from "express";
import authRoute from "./auth";

const router: Router = epxress.Router();

router.use("/auth", authRoute);


export default router;