// server.js

const express = require('express');
const cors = require('cors');
const app = express();

// CORS 설정
app.use(cors({
  origin: 'http://127.0.0.1:5500', // 로컬호스트 5500에서만 CORS 요청
  methods: ['OPTIONS', 'POST', 'GET', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'], // HTTP Header
}));

let data = { message: '여러분 화이팅!' };

// OPTIONS 요청 핸들러
app.options('*', (req, res) => {
  res.sendStatus(204);
});

// JSON 요청 바디 파싱 미들웨어
app.use(express.json());

// GET 요청
app.get('/', (req, res) => {
  res.status(200).json(data);
});

// POST 요청
app.post('/', (req, res) => {
  data.message = req.body.message || '';
  res.status(200).send(`받은 POST 데이터: ${req.body.message}`);
});

// PUT 요청
app.put('/', (req, res) => {
  data.message = req.body.message || '';
  res.status(200).send(`업데이트된 데이터: ${req.body.message}`);
});

// DELETE 요청
app.delete('/', (req, res) => {
  data = {};
  res.status(200).send('데이터가 삭제되었습니다.');
});

// 서버 실행
app.listen(3000, () => {
  console.log(`서버가 http://localhost:3000/ 에서 실행 중입니다.`);
});
