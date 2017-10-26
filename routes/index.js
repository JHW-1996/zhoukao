var express = require('express');
var router = express.Router();
var fs=require('fs')

/* GET home page. */
router.post('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  fs.readFile('public/a.txt','utf-8',function(e,data){
  	var arr=JSON.parse(data)
  	arr.push({name:req.body.name})
  	console.log(arr)
  	
  	fs.writeFile('public/a.txt',JSON.stringify(arr),function(e){
  		fs.readFile('public/a.txt','utf-8',function(e,aa){
  			var b=JSON.parse(aa)
  			res.send({name:b})
  		})
  	})
  })
})
module.exports = router;
