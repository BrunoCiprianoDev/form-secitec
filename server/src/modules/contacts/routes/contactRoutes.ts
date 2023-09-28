import { Router } from 'express';
import { CreateContactController } from '../controllers/CreateContactController';
import { ListContactController } from '../controllers/ListContactController';

const contactRouter = Router();

contactRouter.post('/', new CreateContactController().handle);

contactRouter.get('/list', new ListContactController().handle);

export default contactRouter;
