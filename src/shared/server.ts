import "reflect-metadata";
import express  from 'express';
import routes from '../http/index.routes';
import cors from 'cors';
import './database/connection';

const app = express();
app.use(cors());
app.use(express.json())
app.use(routes);


app.listen( 3333, () => {
    console.log("INIT SERVER")
})