import express from 'express';
import cors from 'cors';
import request from 'request';

const app = express();
app.use(cors());

app.get('/api', (req, res) => {
    
    const filepath = req.query.gpxpath;

    const url = filepath;
    request(url)
        .on('response', response => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Content-Type', 'application/xml');
        })
        .pipe(res);
});

app.listen(3000, () => {
    console.log("서버 실행");
});