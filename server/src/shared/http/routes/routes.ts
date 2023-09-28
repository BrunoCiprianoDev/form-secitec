import { Router } from 'express';
import userRouter from '../../../modules/users/routes/userRoutes';
import contactRouter from '../../../modules/contacts/routes/contactRoutes';
const routes = Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Endpoints related to user management
 */
routes.use('/users', userRouter);

routes.use('/contacts', contactRouter);

export default routes;
