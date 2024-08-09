import express from 'express';
import cors from 'cors';
import request from 'request';

const app = express();
app.use(cors());

app.get('/api', (req, res) => {
    const url = 'https://www.durunubi.kr/editImgUp.do?filePath=/data/koreamobility/course/summap/T_CRS_MNG0000004239.gpx';
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