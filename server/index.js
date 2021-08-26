import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import postRouter from './routes/postroute.js'
import mongoose from 'mongoose'
const app = express();

app.use(bodyParser.json({ limit: "30mb", extendend: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use('/', postRouter)




const PORT = process.env.PORT || 5000;
//connection key
dotenv.config({path:'./.env'})
const DB = process.env.DATABASE_ACCESS;

//connecting database
mongoose.connect(DB, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology:true
}).then(() => {
    console.log("database is connected")
    app.listen(PORT,()=>console.log('app is listning'))
})
.catch((err)=>{console.log(err)})

