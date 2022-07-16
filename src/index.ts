import express from "express";
import morgan from 'morgan';
import { db } from './db-actions/database'
import { seedDatabase } from './db-actions/actionsDatabase';

seedDatabase();

const app = express();
app.use(morgan('dev'));

app.get('/', async (req, res) => {
    const posts = await db.post.findMany();
    res.json(posts);
});

const port = Number(process.env.PORT || 8080);
app.listen(port, '0.0.0.0', () => {
    console.log(`Server started att http://localhost:${port}`)
})