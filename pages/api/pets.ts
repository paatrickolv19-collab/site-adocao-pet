import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { type } = req.query;
  const pets = await prisma.pet.findMany({
    where: type ? { type: String(type) } : {},
  });
  res.status(200).json(pets);
}
