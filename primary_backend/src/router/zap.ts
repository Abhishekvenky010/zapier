import {Router} from "express";
import { authMiddleware } from "../middleware";
const router = Router();

router.post("/",(req:Request,res:Response)=>{
   console.log("zap created");
})
router.get("/",authMiddleware,(req:Request,res:Response,)=>{
   console.log("signin");
})
router.get("/:zapid",authMiddleware,(req:Request,res:Response,)=>{
   console.log("signin");
})




export const zapRouter = router;