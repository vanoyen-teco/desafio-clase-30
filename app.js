#!/usr/bin/env node
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv;

const express = require('express');
const session =  require('express-session');
const path = require('path');

const passport = require('passport');
const handlebars = require('express-handlebars');

const { initializePassport } = require('./models/Passport');
const apiRouter = require("./routes/apiRouter"); // api temporal router.
const mainRouter = require("./routes/mainRouter");
const mongostoreConfig = require('./config/mongoStoreConfig');

const {engine} = handlebars;
const app = express();


const PORT = (argv.port !== undefined)?argv.port:8080;
app.listen(PORT, () => console.log("Server Up"));

// Handlebars settings
app.engine(
    "hbs",
    engine({
        extname: ".hbs",
        defaultLayout: "layout.hbs",
    })
);
app.set("views", "./views");
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname ,'public')));
// app general settings
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session(mongostoreConfig));

initializePassport();
app.use(passport.initialize());
app.use(passport.session());

app.use("/api", apiRouter);
app.use("/", mainRouter);