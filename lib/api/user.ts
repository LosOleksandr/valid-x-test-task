import { cache } from 'react';
import { prisma } from '../prisma';
import { verifySession } from '../session';

export const getUser = cache(async () => {
  const session = await verifySession();
  if (!session) return null;

  const user = await prisma.user.findUnique({ where: { id: session.id as string } });

  return user;
});
