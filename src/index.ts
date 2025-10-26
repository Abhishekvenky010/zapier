import express from "express";
import { PrismaClient } from "./generated/prisma";
const client = new PrismaClient();
const app = express();
app.post("/hooks/catch/:userId/:ZapId",async (req,res)=>{
    const userId = req.params.userId;
    const ZapId = req.params.ZapId;
    const body = req.body;
    await client.$transaction(async tx=>{
       const run = await client.zaprun.create({
        data: { 
            zapid:ZapId,
            metadata:body
         }
    });
     await client.zaprunoutofbox.create({
        data:{
            zaprunid:run.id
        }
     })
     
         
    })
    app.listen(3000);
   
})
