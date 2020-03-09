const express = require("express");
const app = express();

function randomFunc(min, max)
{
    max -= min;
    return Math.random() * max + min;
}

app.get(["/", "/storesByGeo/json"], (req, res) =>
{
    let stores = [];
    let stat = ['plenty', 'some', 'few', 'empty'];
    for(let i=0;i<50000;i++)
    {
        let store = 
        {
            "code": "식별코드",
            "name": "테스트 약국",
            "addr": "테스트 주소",
            "type": "약국",
            "lat": randomFunc(37, 37), // randomFunc(33, 43)
            "lng": randomFunc(127, 127), // randomFunc(132, 124)
            "stock_at": "입고시간",
            "sold_cnt": Math.floor(randomFunc(1, 10)),
            "remain_stat": stat[Math.floor(randomFunc(0, 4))], // 0~3까지
            "created_at": Date()
        };
        stores.push(store);
    }

    let count = stores.length;


    const result = {count, stores};  

    res.json(result); 
});



module.exports = app;