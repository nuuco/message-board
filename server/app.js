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
    { title: "이유진", content: "코드스테이츠3"},
    { title: "양희준1", content: "코드스테이츠1"},
    { title: "심소영1", content: "코드스테이츠2"},
    { title: "이유진1", content: "코드스테이츠3"},
    { title: "양희준2", content: "코드스테이츠1"},
    { title: "심소영2", content: "코드스테이츠2"},
    { title: "이유진2", content: "코드스테이츠3"},
    { title: "양희준3", content: "코드스테이츠1"},
    { title: "심소영3", content: "코드스테이츠2"},
    { title: "이유진3", content: "코드스테이츠3"},
    { title: "양희준4", content: "코드스테이츠1"},
    { title: "심소영4", content: "코드스테이츠2"},
    { title: "이유진4", content: "코드스테이츠3"}
];

const divide = (arr, num) => {
    const result = [];
    
    for(let i = 0; i < arr.length; i += num){
        result.push(arr.slice(i, i + num));
    }

    return result;
}

app.use(express.json());
app.use(cors());
app.use(logger('tiny'));
app.use(express.static(path.join(__dirname, '../client/build')))

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '../client/build/index.html')));
//path.join() 경로를 합쳐주는 메소드
// __dirname : 현재 파일이 속한 폴더의 경로

app.get("/api/list", (req, res) => {
    const temp = divide(data, 5);
    let { page } = req.query;
    if(!page) return res.status(200).json(temp[0]);
    page = Number(page);
    return res.status(200).json(temp[page - 1]);
})

app.listen(PORT, () => {
    console.log('서버 실행중입니다.');
    //mongose.connect().then();
})

