import { Router } from 'express';
import UsersController from './UsersController';

const UsersRouter = Router();
const usersController = new UsersController();

UsersRouter.post('/register', usersController.create)

export default UsersRouter;