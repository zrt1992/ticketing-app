import express from "express";
const router = express.Router();

router.get('/api/user/currentuser',(req,res)=>{
    res.send('current users');
});

export {router as currentUserRouter};