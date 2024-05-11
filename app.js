//install Run npm init -y | npm install express |  npm install morgan
// IMPORT PACKAGES
const express = require("express");
const morgan = require("morgan");

// CREATE EXPRESS APP
const app = express();

// Import projects JSON data
const projects = require('./data/projects.json');
const articles = require('./data/articles.json');

// MIDDLEWARE
app.use(express.static("public"));
app.use(express.json()); 
app.use(morgan("dev")); 

// ROUTES
// Start defining your routes here:

// START THE SERVER
const port = 5001;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
//Start server auto: npm install nodemon --global
//npm install nodemon --save-dev
//add dev to package.json => "scripts" =>  "dev": "nodemon app.js"
//npm run dev
//http://localhost:5001

//ROUTERS
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/blog", (req, res) => {
  res.sendFile(__dirname + "/views/blog.html");
});

// Import JSON data
app.get("/api/projects", (req, res) => {
  res.json(projects);
});

app.get("/api/articles", (req, res) => {
  res.json(articles);
});

app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + "/views/not-found.html");
});

