import express from 'express';
import {json} from 'body-parser';
import {currentUserRouter} from "./routes/current-users";
import {signoutRouter} from "./routes/signout";
import {signinRouter} from "./routes/signin";
import {signupRouter} from "./routes/signup";


const app = express();
app.use(json());
app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.get('/api/user/zulfi', (req, res) => {
    // console.log('this is get req');
    res.status(200).send('this is get tata');
})
app.post('/api/user/zulfi', (req, res) => {
    res.status(200).send('this is mama papa');
})

app.listen('3000', () => {
    console.log('listening auth on zulfi  30000');
})

