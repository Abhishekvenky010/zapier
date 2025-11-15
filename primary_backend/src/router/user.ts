import { NextFunction, Router } from "express";
import { authMiddleware } from "../middleware";
import { SignupSchema,SigninSchema } from "../types";
import { prismaClient } from "../db";
import jwt from "jsonwebtoken"
import { JWT_PASSWORD } from "../config";
const router = Router();

router.post("signup",async (req,res)=>{
   const body = req.body.username;
   const parsedData = SignupSchema.safeParse(body);

      if (!parsedData.success) {
        console.log(parsedData.error);
        return res.status(411).json({
            message: "Incorrect inputs"
        })}
        const userExist = await prismaClient.user.findFirst({
            where:{
                email:parsedData.data?.username,
            }
        });
        if(userExist){
           return res.status(404).json({
            msg:"user already exist"
           })
        }
        await prismaClient.user.create({
            data:{
                email:parsedData.data?.username,
                password:parsedData.data?.password,
                name:parsedData.data?.name
            }
        })
    return res.json({
        message : "please verify ur account"
    })

})
router.post("/signin",async (req,res)=>{
  const body = req.body.username;
  const parsedData = SigninSchema.safeParse(body);
  if(!parsedData.success){
    return res.status(411).json({
        message:"incorrect Inputs"
    })
  }
  const user= await prismaClient.user.findFirst({
    where:{
       email:parsedData.data.username,
       password:parsedData.data.password
    }
  });
  if(!user){
    return res.status(403).json({
        msg:"user doesnt exist"
    })
  }
  const token = jwt.sign({
    id:user.id
  },JWT_PASSWORD);
  
    res.json({
        token:token,
    })
  
})
router.get("/user",authMiddleware,async(req,res)=>{
    // @ts-ignore
   const id : req.id;
   const user= await prismaClient.user.findFirst({
    where:{
        id
    },
    select:{
        name:true,
        email:true

    }
   });
   return res.json({
    user
   });

})


export const userRouter = router;