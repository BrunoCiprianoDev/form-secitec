import prismaClient from '../../../prismaClient';

interface IRequest {
  query: string;
  page: number;
  size: number;
}

class ListContactService {
  async execute({ query, page, size }: IRequest) {
    if (page < 1) {
      page = 1;
    }
    if (size < 1) {
      size = 10;
    }

    const skipAmount = (page - 1) * size;

    const listResponse = await prismaClient.contact.findMany({
      where: {
        name: {
          contains: query,
        },
      },
      skip: skipAmount,
      take: size,
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
    return listResponse;
  }
}

export { ListContactService };
