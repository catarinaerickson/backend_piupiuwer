import { Router } from 'express'
import UsersRouter from './Users/routes';

const routes = Router();

routes.use('/', UsersRouter)

export default routes;