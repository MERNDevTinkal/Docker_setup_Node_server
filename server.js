import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.get('/', (req, res , next) => {
  res.send('Learning Docker to make images and containers for server applications using Node.js and Express.js framework. This is a sample response from the server. You can access this server at http://localhost:8000/ and it will respond with this message. Feel free to modify the code and test it out! \n\nThis server is running on port 8000. ');
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});