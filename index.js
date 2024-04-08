const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');

const videoRoutes = require('./routes/videos');

const port = process.env.PORT || 8080;



app.use(express.json());
app.use(cors());

// ROUTES
app.use('/videos', videoRoutes);



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
















// // middleware

// app.use((req, res, next) => {
//     if (req.path === '/foods/soups') {
//         const url = req.originalUrl;
//         const timestamp = new Date().toLocaleString();
//         console.log(`${timestamp} --- Incoming request at made to ${url}`);
//     }

//     next();
// })


// // serving static files

// app.use(express.static('public'));


