var express = require('express');
var conn = require('../db.js');

var vr_router = express.Router();

vr_router.get('/', (req, res) => {
    let sqlQuery = "SELECT * FROM VOLTAGE_RECORD";

    let query = conn.query(sqlQuery, (err, results) => {
        if(err) throw err;
        res.send(JSON.stringify((results)));
    });
});

vr_router.post('/', (req, res) => {
    let record = {
        MAC : req.body.MAC,
        CREATE_TIME: req.body.CREATE_TIME,
        CREATE_MINUTE : req.body.CREATE_MINUTE,
        VOLTAGES : req.body.VOLTAGES,
        PACK_STATE : req.body.PACK_STATE,
        IS_STATE_CHANGE : req.body.IS_STATE_CHANGE,
        PROTECTION_STATE: req.body.PROTECTION_STATE,
        CYCLETIMES: req.body.CYCLETIMES,
        TEMPERATURES : req.body.TEMPERATURES,
        AVG_VOLTAGE : req.body.AVG_VOLTAGE,
        VOL_CONSISTENCY : req.body.VOL_CONSISTENCY,
        CURRENT : req.body.CURRENT,
        RSOC : req.body.RSOC,
        REAL_CAPACITY : req.body.REAL_CAPACITY,
        REMAIND_CAPACITY : req.body.REMAIND_CAPACITY
    };

    let sqlQuery = "INSERT INTO VOLTAGE_RECORD SET ?";
    let query = conn.query(sqlQuery, record, (err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"error":null, "response": "OK"}));
    })
});

module.exports = vr_router;