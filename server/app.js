const express = require('express');
//const queryRoute = require('./router/routes');
const {getLatestPosts} = require('./logic/queries');
const routing = require('./router/article.routes')
const articles = require("./controllers/article.controller"); 


const app = express();

//JSON-Parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Find All Articles
app.get('/getUser', articles.findAll)
//Get a Specific Writer
app.get('/getWriter', articles.findWriter)
//Get Categories
app.get('/getCategories', articles.findCategories)

app.listen(3000);

module.exports = app;