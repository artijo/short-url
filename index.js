import express from 'express';
import router from './routes.js';
import expressEjsLayouts from 'express-ejs-layouts';
import bodyParser from 'body-parser';
import session from 'express-session';
// import cors from 'cors';

const app = express();
app.use(express.static("public"));

app.set("view engine", "ejs");
app.use(expressEjsLayouts);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
    })
);

// app.use(cors());

app.use(router);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});