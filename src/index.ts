import express from "express";
import morgan from 'morgan';
import { findPosts, seedDatabase } from './actions/databaseActions';
import React from 'react';

seedDatabase();

const app = express();
app.use(morgan('dev'));

app.get('/', async (req, res) => {
    const posts = await findPosts;
    res.json(posts); 
});

console.log(React.version);

const port = Number(process.env.PORT || 8080);
app.listen(port, '0.0.0.0', () => {
    console.log(`Server started att http://localhost:${port}`)
})

