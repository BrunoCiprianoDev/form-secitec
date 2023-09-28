import { Request, Response } from 'express';
import { CreateContactService } from '../services/CreateContactService';

class CreateContactController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;
    const createComplaintService = new CreateContactService();

    const serviceResponse = await createComplaintService.execute({
      name,
      email,
    });

    return response.status(201).json(serviceResponse);
  }
}

export { CreateContactController };
