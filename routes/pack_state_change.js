var express = require('express');
var conn = require('../db.js');

var psc_router = express.Router();

psc_router.get('/', (req, res) => {
    let sqlQuery = "SELECT * FROM pack_state_change";

    let query = conn.query(sqlQuery, (err, results) => {
        if(err) throw err;
        res.send(JSON.stringify((results)));
    });
});

psc_router.post('/', (req, res) => {
    let data = {
        MAC : req.body.MAC,
        CREATE_TIME : req.body.CREATE_TIME,
        STATE : req.body.STATE,
        PARAM1 : req.body.PARAM1,
        PARAM2 : req.body.PARAM2,
        PARAM3 : req.body.PARAM3
    };

    let sqlQuery = "INSERT INTO pack_state_change SET ?";
    let query = conn.query(sqlQuery, data, (err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"error":null, "response": "OK"}));
    })
});

module.exports = psc_router;