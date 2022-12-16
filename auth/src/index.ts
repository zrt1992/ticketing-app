import express from 'express';
import 'express-async-errors';
import {json} from 'body-parser';
import {currentUserRouter} from "./routes/current-users";
import {signoutRouter} from "./routes/signout";
import {signinRouter} from "./routes/signin";
import {signupRouter} from "./routes/signup";
import {errorHandler} from "./middlewares/error-handler";
import {RouteNotFound} from "./error/route-not-found";
import mongoose from "mongoose";


const app = express();
app.use(json());
app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);
// app.all('*', async () => {
//     throw new RouteNotFound();
// })

app.use(errorHandler);


app.get('/api/user/zulfi', async (req, res) => {
    // console.log('this is get req');
    res.status(200).send('this is get tata');
})
app.post('/api/user/zulfi', (req, res) => {
    res.status(200).send('this is mama papa');
})
const start = async () => {

    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect('mongodb://auth-mongo-service:27017/auth');
        console.log('connected to mongo db');
    } catch (error) {
        console.log('error in mongo');
    }
    app.listen('3000', () => {
        console.log('listening auth on zulfi  30000');

    });
}
start();




