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

    for(let i=0;i<50;i++)
    {
        let store = 
        {
            "code": "string",
            "name": "테스트 병원",
            "addr": "테스트 주소",
            "lat": randomFunc(33, 43),
            "lng": randomFunc(132, 124),
            "stock_t": "2시",
            "stock_cnt": Math.floor(randomFunc(1, 10)),
            "sold_cnt": Math.floor(randomFunc(1, 10)),
            "remain_cnt": Math.floor(randomFunc(1, 10)),
            "sold_out": true || false,
            "created_at": Date()
        };
        stores.push(store);
    }

    let count = stores.length;


    const result = {count, stores};  

    res.json(result); 
});



module.exports = app;