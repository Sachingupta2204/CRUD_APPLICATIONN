import express from "express";
import Connection from "./db.js";
import Routes from "./routes/route.js";
import bodyParser from "body-parser";
import cors from 'cors';

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use('/', Routes)
const PORT = 8000;
Connection();

app.listen(PORT, ()=> console.log(`server is running successfully on PORT ${PORT}`))