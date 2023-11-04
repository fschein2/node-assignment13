const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/hurricanes", (req, res) => {
    const hurricanes = [];
    
    hurricanes[0] = {
        year: "1983",
        record: "11-1",
        qb: "Bernie Kosar",
        topScorers: [
            "Albert Bentley",
            "Speedy Neal",
            "Eddie Brown"
        ],
        coach: "Howard Schnellenberger",
        img: "images/1983canes.jpg"
    };
    hurricanes[1] = {
        year: "1987",
        record: "12-0",
        qb: "Steve Walsh",
        topScorers: [
            "Melvin Bratton",
            "Cleveland Gary",
            "Michael Irvin"
        ],
        coach: "Jimmy Johnson",
        img: "images/1987canes.jpg"
    };
    hurricanes[2] = {
        year: "1989",
        record: "11-1",
        qb: "Craig Erickson",
        topScorers: [
            "Stephen McGuire",
            "Dale Dawkins",
            "Wesley Carroll"
        ],
        coach: "Dennis Erickson",
        img: "images/1989canes.jpg"
    };
    hurricanes[3] = {
        year: "1991",
        record: "12-0",
        qb: "Gino Torretta",
        topScorers: [
            "Stephen McGuire",
            "Martin Patton",
            "Lamar Thomas"
        ],
        coach: "Dennis Erickson",
        img: "images/1991canes.jpg"
    };
    hurricanes[4] = {
        year: "2001",
        record: "12-0",
        qb: "Ken Dorsey",
        topScorers: [
            "Clinton Portis",
            "Andre Johnson",
            "Jeremy Shockey"
        ],
        coach: "Larry Coker",
        img: "images/2001canes.webp"
    };

    res.json(hurricanes);
});

app.listen(3000, () => {
    console.log("listening");
});