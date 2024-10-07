require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const app = express();

const logStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

app.use(morgan('combined', { stream: logStream }));

app.get('/', (req, res) => {
    res.send('s3에 로그 파일 저장');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server is running`);
});
