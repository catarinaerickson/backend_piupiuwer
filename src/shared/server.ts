import "reflect-metadata";
import express  from 'express';
import 'express-async-errors';
import '../config/env';
import routes from '../http/index.routes';
import cors from 'cors';
import './database/connection';
import { authMiddleware } from "@http/middlewares/authMiddleware";

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(authMiddleware);


app.listen( 3333, () => {
    console.log("INIT SERVER")
})