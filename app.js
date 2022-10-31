const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
const bbr_router = require('./routes/battery_base_record.js');
const bc_router = require('./routes/battery_capacity.js');
const ir_router = require('./routes/internal_resistance.js');
const mr_router = require('./routes/mile_rsoc.js');
const oc_router = require('./routes/offset_capacity.js');
const psc_router = require('./routes/pack_state_change.js');
const sc_router = require('./routes/speed_current.js');
const vr_router = require('./routes/voltage_record.js');

app.use(bodyParser.json());
app.get('/', (req, res) => res.send('Welcome to HyperX NFT Marketplace!'));

app.use('/api/battery_base_record', bbr_router);
app.use('/api/battery_capacity', bc_router);
app.use('/api/internal_resistance', ir_router);
app.use('/api/mile_rsoc', mr_router);
app.use('/api/offset_capacity', oc_router);
app.use('/api/pack_state_change', psc_router);
app.use('/api/speed_current', sc_router);
app.use('/api/voltage_record', vr_router);

app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
