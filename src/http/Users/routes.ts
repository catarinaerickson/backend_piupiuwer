import { Router } from 'express';
import UsersController from './UsersController';
import { auth } from '../middlewares/authMiddleware';

const UsersRouter = Router();
const usersController = new UsersController();

UsersRouter.post('/register', usersController.create)
UsersRouter.post('/login', usersController.login)
UsersRouter.use(auth)
// UsersRouter.post('/create-profile', usersController.createProfile)
UsersRouter.post('/edit-profile', usersController.alterProfile)
UsersRouter.get('/users', usersController.list)

export default UsersRouter;