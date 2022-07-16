import { PrismaClient } from "@prisma/client";
import { nanoid } from 'nanoid';

export const db = new PrismaClient({log: ['error', 'info', 'query', 'warn']});
export const genId = () => nanoid(16);
