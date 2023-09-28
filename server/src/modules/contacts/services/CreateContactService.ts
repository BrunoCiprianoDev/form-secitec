import prismaClient from '../../../prismaClient';

interface IRequest {
  name: string;
  email: string;
}

class CreateContactService {
  async execute({ name, email }: IRequest) {
    const contactSaved = await prismaClient.contact.create({
      data: {
        name,
        email,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return contactSaved;
  }
}

export { CreateContactService };
