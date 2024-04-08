const express = require('express');
const fs = require('fs');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');


// Read from json file
const videoDataFilePath = './data/videos.json';
const rawData = fs.readFileSync(videoDataFilePath);
const videos =  JSON.parse(rawData);



// ROUTES
router.get('/', (req,res) => {
    res.send(videos);
})


router.get('/:id', (req,res) => {
    const videoId = req.params.id;
    const videoDetails = videos.find((video) => videoId == video.id)
    res.send(videoDetails);
})


router.post('/', (req, res) => {
    const { title, description } = req.body;
    const timestamp = Date.now();

    const newVideo = [{
      id: uuidv4(),
      title: title,
      channel: "Red Cow",
      image: '../public/images/image0.jpeg',
      description: description,
      views: "0",
      likes: "0",
      duration: "0",
      video: null,
      timestamp: timestamp,
      comments: [],
    }];


// Write to json file
    const newVideosData = [...videos, ...newVideo];
    fs.writeFileSync(videoDataFilePath, JSON.stringify(newVideosData));


    res.json(newVideo);
})

  


module.exports = router;