var express = require('express');
var router = express.Router();

const mysql = require('mysql');
const config = require('../config');
const connection = mysql.createConnection(config);
connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/addTask',(req, res)=>{
  const taskName = req.body.taskName;
  const taskDate = req.body.taskDate;
  res.json({taskName,taskDate})
});


module.exports = router;
