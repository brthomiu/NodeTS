import { db } from './database'
import { genId } from './database';

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

  /* Query all posts 
haven't been able to make this work as an exported async function yet

 export const posts = db.post.findMany(); */
