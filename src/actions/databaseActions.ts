import { PrismaClient } from "@prisma/client";
import { nanoid } from 'nanoid';

export const db = new PrismaClient({log: ['error', 'info', 'query', 'warn']});
export const genId = () => nanoid(16);

/* Seed database */

export const seedDatabase = async () => {
    if ((await db.post.count()) === 0) {
      await db.post.createMany({
        data: [
          {
            id: genId(),
            slug: 'ultimate-node-stack',
            title: 'Ultimate Node Stack 2022',
            published: new Date(),
          },
          {
            id: genId(),
            slug: 'draft-post',
            title: 'Draft Post',
          },
        ],
      });
    }
  };

 /*  Query all posts  */

  export const findPosts = db.post.findMany()
