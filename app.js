const express = require('express');
const port = process.env.PORT || 9000;
const cors = require('cors');
const app = express();


app.use(express.json({extended: true}));
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});
app.use('/', require('./routes/main'));



const server = app.listen(port, function () {
    console.log('Example app listening on port 9000!');
});


process.on('SIGTERM', () => {
    server.close(() => {
        console.log('Process terminated');
    });
});