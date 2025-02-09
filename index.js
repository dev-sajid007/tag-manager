import express from 'express';
import TagRouter from './routers/TagRouter.js';
import connectDB from './database/db.js';
const app = express();
const port = 8080;


//call db cinnection
connectDB();
// Middleware to parse JSON requests
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});


app.use("/api/v1/tags",TagRouter);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
