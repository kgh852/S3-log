require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const app = express();

const logDirectory = path.join(__dirname, 'log');
if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory);
}

const logStream = fs.createWriteStream(path.join(logDirectory, 'app.log'));

app.use(morgan('combined', { stream: logStream }));

app.get('/', (req, res) => {
    res.send('app.log파일에 로그저장');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
