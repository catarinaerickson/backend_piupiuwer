import { auth } from '@http/middlewares/authMiddleware';
import { Router } from 'express';
import PiusController from './PiusController';

const PiusRouter = Router();
const piusController = new PiusController();

PiusRouter.use(auth);
PiusRouter.post('/pius', piusController.create)
PiusRouter.post('/pius/like', piusController.like)
PiusRouter.delete('/pius:piuId', piusController.delete)
PiusRouter.get('/pius', piusController.list)

export default PiusRouter;