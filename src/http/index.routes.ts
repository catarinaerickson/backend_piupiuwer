import { Router } from 'express'
import PiusRouter from './Pius/routes';
import UsersRouter from './Users/routes';

const routes = Router();

routes.use('/', UsersRouter)
routes.use('/', PiusRouter)

export default routes;