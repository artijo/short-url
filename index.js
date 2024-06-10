import express from 'express';
import router from './routes.js';
import expressEjsLayouts from 'express-ejs-layouts';
import bodyParser from 'body-parser';
import session from 'cookie-session';
import dotenv from 'dotenv';
// import cors from 'cors';

const app = express();
app.use(express.static("public"));

app.set("view engine", "ejs");
app.use(expressEjsLayouts);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

dotenv.config();

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 },
    })
);

// app.use(cors());

app.use(router);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});