import { Request, Response } from 'express';

import { ListContactService } from '../services/ListContactService';

class ListContactController {
  async handle(request: Request, response: Response): Promise<Response> {
    const query = request.query.query as string;
    const size = parseInt(request.query.size as string, 10);
    const page = parseInt(request.query.page as string, 10);

    const listContactService = new ListContactService();

    const serviceResponse = await listContactService.execute({
      query,
      size,
      page,
    });

    return response.json(serviceResponse);
  }
}

export { ListContactController };
