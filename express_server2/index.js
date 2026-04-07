import express from 'express'
import { dirname } from "path"
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/login", (req, res) => {
  console.log(req.body.street + " " + req.body.pet);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})