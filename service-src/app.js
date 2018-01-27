const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");

const app = express();

const airlineUsers = require('./routes/airline_users_router');
const dashboardChart = require('./routes/dashboard_chart');

const port = 4000;

app.use(cors());

app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

require("./config/passport")(passport);

app.use("/airlineUser", airlineUsers);
app.use("/dashboardChart", dashboardChart);

app.get('/', (req, res) => {
    res.send('Invalid Endpoind');
});

app.listen(port, () => {
    console.log('Server started on port ' + port);
});