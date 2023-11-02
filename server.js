const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/JSON_NAME", (req, res) => {
    const FILE_NAME = [];
    
    res.json(FILE_NAME);
});

app.listen(3000, () => {
    console.log("listening");
});