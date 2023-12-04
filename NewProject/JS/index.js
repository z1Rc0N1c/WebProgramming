const express = require('express');
const path = require('path');

const app = express();

// 정적 파일을 제공할 경로 설정
app.use(express.static(path.join(__dirname, 'public')));

// 브라우저에 index.html 파일 전송
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});
app.get('/styles.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../styles.css'));
});
app.get('/JS/script.js', (req, res)=>{
    res.sendFile(path.join(__dirname, 'script.js'));
});

// 서버 시작
const PORT = 7777; // 사용할 포트 번호
app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
