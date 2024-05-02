import epxress, {Router} from "express";
import { register } from "../controllers/auth";


const router: Router = epxress.Router();

router.post("/register", register);


export default router;