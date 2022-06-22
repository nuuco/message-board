const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const app = express();
const path = require('path');
const PORT = 3333;

// /app/anans/a12  <- 윈도우 경로
// \app\anans\a12  <- 맥 경로
// 이걸 맞춰주는게 path

const data = [
    { title: "양희준", content: "코드스테이츠1"},
    { title: "심소영", content: "코드스테이츠2"},
    { title: "이유진", content: "코드스테이츠3"}
];



app.use(express.json());
app.use(cors());
app.use(logger('tiny'));
app.use(express.static(path.join(__dirname, '../client/build')))

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '../client/build/index.html')));
//path.join() 경로를 합쳐주는 메소드
// __dirname : 현재 파일이 속한 폴더의 경로

app.get("/list", (req, res) => res.status(200).json(data))

app.listen(PORT, () => {
    console.log('서버 실행중입니다.');
    //mongose.connect().then();
})

