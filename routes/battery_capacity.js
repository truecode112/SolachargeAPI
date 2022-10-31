var express = require('express');
var conn = require('../db.js');

var bc_router = express.Router();

bc_router.get('/', (req, res) => {
    let sqlQuery = "SELECT * FROM battery_capacity";

    let query = conn.query(sqlQuery, (err, results) => {
        if(err) throw err;
        res.send(JSON.stringify((results)));
    });
});

bc_router.post('/', (req, res) => {
    let data = {
        MAC : req.body.MAC,
        CREATE_TIME: req.body.CREATE_TIME,
        CAPACITY_ATTENUATE : req.body.CAPACITY_ATTENUATE
    };

    let sqlQuery = "INSERT INTO battery_capacity SET ?";
    let query = conn.query(sqlQuery, data, (err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"error":null, "response": "OK"}));
    })
});

module.exports = bc_router;