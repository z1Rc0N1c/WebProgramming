const express = require('express');
const fetch = require('node-fetch');
const xml2js = require('xml2js');

const app = express();
const port = 7770;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    const serviceKey = 'mSQrcVWWtKTaKK0H%2BoSR9ubBXKlGpEp4dMV4Ip4haJWIsXt%2B4%2B99etQLEwLMhhWiS%2BZIFiqQ2SiQ3tqYIr4eyQ%3D%3D'; /* 실제 서비스 키 */
    const apiUrl = `http://ws.bus.go.kr/api/rest/arrive/getArrInfoByRouteAll?serviceKey=${serviceKey}&busRouteId=100100118`;

    fetch(apiUrl)
        .then(response => response.text())
        .then(xmlText => {
            xml2js.parseString(xmlText, (err, result) => {
                if (err) {
                    console.error('XML을 JSON으로 변환하는 중 오류가 발생했습니다.', err);
                    res.send('데이터를 가져오는 중 오류가 발생했습니다.');
                } else {
                    // JSON 데이터를 렌더링하여 페이지에 표시
                    res.render('index', { jsonData: JSON.stringify(result, null, 2) });
                    console.log("er");
                }
            });
        })
        .catch(error => {
            console.error('데이터를 가져오는 중 오류가 발생했습니다.', error);
            res.send('데이터를 가져오는 중 오류가 발생했습니다.');
        });
    console.log("re")
});

app.listen(port, () => {
    console.log(`서버가 http://localhost:${port} 에서 실행 중입니다!`);
});
