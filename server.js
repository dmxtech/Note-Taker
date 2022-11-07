const express = require('express');
const app = express();
const PORT = 3005;
const htmlroutes = require("./api/htmlroutes");
const apiroutes = require("./api/apiroutes")


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(apiroutes);
app.use(htmlroutes);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});