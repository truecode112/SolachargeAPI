var express = require('express');
var conn = require('../db.js');

var sc_router = express.Router();

sc_router.get('/', (req, res) => {
    let sqlQuery = "SELECT * FROM speed_current";

    let query = conn.query(sqlQuery, (err, results) => {
        if(err) throw err;
        res.send(JSON.stringify((results)));
    });
});

sc_router.post('/', (req, res) => {
    let data = {
        SPEED : req.body.SPEED,
        CURRENT : req.body.CURRENT,
        TOTAL_VOLTAGE : req.body.TOTAL_VOLTAGE,
        REMAIND_CAPACITY : req.body.REMAIND_CAPACITY,
        TEMP : req.body.TEMP,
        CREATE_TIME : req.body.CREATE_TIME
    };

    let sqlQuery = "INSERT INTO speed_current SET ?";
    let query = conn.query(sqlQuery, data, (err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"error":null, "response": "OK"}));
    })
});

module.exports = sc_router;