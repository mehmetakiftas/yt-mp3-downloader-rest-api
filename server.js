const express = require('express');
const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');
const app = express();
const PORT = 3000;


// Ffmpeg Settings
ffmpeg.setFfmpegPath("C:/ffmpeg/bin/ffmpeg.exe");
ffmpeg.setFfprobePath("C:/ffmpeg/bin");


app.use(express.json());


app.get('/', (req, res) => {
    res.send("Welcome to YouTube MP3 Downloader API by Mehmet Akif Taş");
})


app.post('/', async (req, res) => {
    const url = req.body.url;
    let v_id = url.split("?v=")[1];

    let info = await ytdl.getInfo(v_id);
    let info_ = info.videoDetails.title.toLowerCase();
    let videoTitle = info_.replace(/[^\w]/g, '-');
    let stream = ytdl(v_id, {quality: 'highestaudio'})

    ffmpeg(stream).audioBitrate(128)
    .save(`${__dirname}/${videoTitle}.mp3`)
    .on('end', () =>{
        console.log("Downloaded Successfully!");
        res.json({
            success: true,
            videotitle : info.videoDetails.title
        })
    })
})


app.listen(PORT, () => {
    console.log('listening on port: ' + PORT);
});