import { Router } from 'express';
import UsersController from './UsersController';

const UsersRouter = Router();
const usersController = new UsersController();

UsersRouter.post('/register', usersController.create)
UsersRouter.post('/login', usersController.login)

export default UsersRouter;