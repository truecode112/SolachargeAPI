var express = require('express');
var conn = require('../db.js');

var bbr_router = express.Router();

bbr_router.get('/', (req, res) => {
    let sqlQuery = "SELECT * FROM battery_base_record";

    let query = conn.query(sqlQuery, (err, results) => {
        if(err) throw err;
        res.send(JSON.stringify((results)));
    });
});

bbr_router.post('/', (req, res) => {
    let record = {
        MAC : req.body.MAC,
        CREATE_TIME: req.body.CREATE_TIME,
        PACK_VOLTAGE : req.body.PACK_VOLTAGE,
        CURRENT : req.body.CURRENT,
        CHG_MOS_STATE : req.body.CHG_MOS_STATE,
        DSG_MOST_STATE : req.body.DSG_MOST_STATE,
        REAL_CAPACITY: req.body.REAL_CAPACITY,
        REMAIND_CAPACITY: req.body.REMAIND_CAPACITY,
        CYCLE_TIMES : req.body.CYCLE_TIMES,
        TEMPERATURES : req.body.TEMPERATURES,
        PROTECTION_STATE : req.body.PROTECTION_STATE,
        RSOC : req.body.RSOC
    };

    let sqlQuery = "INSERT INTO battery_base_record SET ?";
    let query = conn.query(sqlQuery, record, (err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"error":null, "response": "OK"}));
    })

});

module.exports = bbr_router;