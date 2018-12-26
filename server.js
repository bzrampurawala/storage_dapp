const express = require('express');
const {env} = require('./config');
const morgan = require('morgan');
const helmet = require('helmet');
const app = express();
const server = app.listen(env.PORT, "0.0.0.0", function() {
    console.log(
        "server is running on http://%s:%s",
        server.address().address,
        server.address().port
    );
});
app.use(express.static(__dirname + "/view"));
app.use(morgan("dev"));
app.use(helmet());
app.use(helmet.noCache());