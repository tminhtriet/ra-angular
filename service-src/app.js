const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");

const app = express();

const port = 4000;

app.get('/', (req, res) => {
    res.send('Invalid Endpoind');
})

app.listen(port, () => {
    console.log('Server started on port ' + port);
})