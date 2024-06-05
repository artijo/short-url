import express from 'express';
import router from './routes.js';
import expressEjsLayouts from 'express-ejs-layouts';

const app = express();
app.use(express.static("public"));

app.set("view engine", "ejs");
app.use(expressEjsLayouts);

app.use(router);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});