import express from 'express';
import cors from 'cors';
import routes from './routes';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>console.log("Conectado a base de dados"));

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server iniciado na porta 3000")
});