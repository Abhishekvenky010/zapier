import express from "express";
const app = express();
app.post("/hooks/catch/:userId/:ZapId",(req,res)=>{
    const userId = req.body.userId;
    const ZapId = req.body.ZapId;
})