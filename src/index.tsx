import express from "express";
import morgan from 'morgan';
import { findPosts, seedDatabase } from './actions/databaseActions';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import path from 'path';

seedDatabase();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));

/* Create root and render react app
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
  );  */

/*  Responds to GET with test JSON data */
app.get('/json', async (req, res) => {
    const posts = await findPosts;
    res.json(posts); 
});



/* Create server and listen */

const port = Number(process.env.PORT || 8080);
app.listen(port, '0.0.0.0', () => {
    console.log(`Server started att http://localhost:${port}`)
})

/*Get HTML path */ 

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../", "src", "index.html"));
   });

/*Attempt to render React page */



try {
    const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
  );
} catch (error) {
    console.log("There was an error rendering the page.")
}




