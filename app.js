// import {Express} from "express";
const express = require("express");
require("./database");
const config = require("./config.json");

const bodyParser = require("body-parser");
const cors = require("cors");

const skillRouter = require("./routes/skills");
const backgroundRouter = require("./routes/backgrounds");
const diceTypeRouter = require("./routes/dicetypes");
const levelRouter = require("./routes/levels");
const featRouter = require("./routes/feats");
const abilitiesRouter = require("./routes/abilities");
const characterclassRouter = require("./routes/characterclasses");
const raceRouter = require("./routes/races");
const subraceRouter = require("./routes/subraces");
const specialStatRouter = require("./routes/specialstats");
const characterRouter = require("./routes/charactersheets");

const app = express();
app.use(bodyParser.json({ type: "application/*+json" }));
app.use(cors({ origin: "*" }));

app.use("/skills", skillRouter);
app.use("/charactersheets", characterRouter);
app.use("/backgrounds", backgroundRouter);
app.use("/dicetypes", diceTypeRouter);
app.use("/levels", levelRouter);
app.use("/feats", featRouter);
app.use("/specialstats", specialStatRouter);
app.use("/abilities", abilitiesRouter);
app.use("/characterclasses", characterclassRouter);
app.use("/races", raceRouter);
app.use("/subraces", subraceRouter);

app.listen(config.port, config.host, () => {
  console.log(
    `DnD api server listening at http://${config.host}:${config.port}`
  );
});
