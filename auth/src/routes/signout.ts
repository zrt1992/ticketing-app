import express from "express";
const router = express.Router();

router.get('/api/user/singout',(req,res)=>{
    res.send('sign out');
});

export {router as signoutRouter};