var express = require('express');
var conn = require('../db.js');

var mr_router = express.Router();

mr_router.get('/', (req, res) => {
    let sqlQuery = "SELECT * FROM MILE_RSOC";

    let query = conn.query(sqlQuery, (err, results) => {
        if(err) throw err;
        res.send(JSON.stringify((results)));
    });
});

mr_router.post('/', (req, res) => {
    let data = {
        MILE : req.body.MILE,
        USE_POWER: req.body.USE_POWER,
        USE_TIME : req.body.USE_TIME,
        CREATE_TIME : req.body.CREATE_TIME
    };

    let sqlQuery = "INSERT INTO MILE_RSOC SET ?";
    let query = conn.query(sqlQuery, data, (err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"error":null, "response": "OK"}));
    })
});

module.exports = mr_router;