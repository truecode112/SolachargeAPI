var express = require('express');
var conn = require('../db.js');

var oc_router = express.Router();

oc_router.get('/', (req, res) => {
    let sqlQuery = "SELECT * FROM offset_capacity";

    let query = conn.query(sqlQuery, (err, results) => {
        if(err) throw err;
        res.send(JSON.stringify((results)));
    });
});

oc_router.post('/', (req, res) => {
    let data = {
        OFFSET_RSOC : req.body.OFFSET_RSOC,
        CREATE_TIME : req.body.CREATE_TIME
    };

    let sqlQuery = "INSERT INTO offset_capacity SET ?";
    let query = conn.query(sqlQuery, data, (err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"error":null, "response": "OK"}));
    })
});

module.exports = oc_router;