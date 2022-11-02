var express = require('express');
var conn = require('../db.js');

var bbr_router = express.Router();

bbr_router.get('/', (req, res) => {
    let sqlQuery = "SELECT * FROM BATTERY_BASE_RECORD";

    let query = conn.query(sqlQuery, (err, results) => {
        if(err) throw err;
        res.send(JSON.stringify((results)));
    });
});

bbr_router.post('/', (req, res) => {
    console.log('bbr_router', req.body);

    let record = {
        MAC : req.body.MAC,
        CREATE_TIME: req.body.CREATE_TIME,
        PACK_VOLTAGE : req.body.PACK_VOLTAGE,
        CURRENT : req.body.CURRENT,
        CHG_MOS_STATE : req.body.CHG_MOS_STATE,
        DSG_MOS_STATE : req.body.DSG_MOS_STATE,
        REAL_CAPACITY: req.body.REAL_CAPACITY,
        REMAIND_CAPACITY: req.body.REMAIND_CAPACITY,
        CYCLE_TIMES : req.body.CYCLE_TIMES,
        TEMPERATURES : req.body.TEMPERATURES,
        PROTECTION_STATE : req.body.PROTECTION_STATE,
        RSOC : req.body.RSOC,
        LATITUDE : req.body.LATITUDE,
        LONGITUDE : req.body.LONGITUDE
    };

    let sqlQuery = "INSERT INTO BATTERY_BASE_RECORD SET ?";
    let query = conn.query(sqlQuery, record, (err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"error":null, "response": "OK"}));
    })

});

module.exports = bbr_router;