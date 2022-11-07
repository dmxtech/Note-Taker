const express = require('express');
const app = express();
const PORT = 3055;
const htmlroutes = require("./api/htmlroutes");
const apiroutes = require("./api/apiroutes")


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(apiroutes);
app.use(htmlroutes);


let port = process.env.PORT;
if (port == null || port == "") {
    port = 3055;
}
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});