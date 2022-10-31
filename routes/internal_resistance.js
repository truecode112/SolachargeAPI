var express = require('express');
var conn = require('../db.js');

var ir_router = express.Router();

ir_router.get('/', (req, res) => {
    let sqlQuery = "SELECT * FROM internal_resistance";

    let query = conn.query(sqlQuery, (err, results) => {
        if(err) throw err;
        res.send(JSON.stringify((results)));
    });
});

ir_router.post('/', (req, res) => {
    let data = {
        MAC : req.body.MAC,
        CREATE_TIME: req.body.CREATE_TIME,
        RESISTANCE : req.body.RESISTANCE,
        AVG_RES : req.body.AVG_RES,
        RES_CONSISTENCY : req.body.RES_CONSISTENCY
    };

    let sqlQuery = "INSERT INTO internal_resistance SET ?";
    let query = conn.query(sqlQuery, data, (err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"error":null, "response": "OK"}));
    })
});

module.exports = ir_router;