var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.render('index', {name: "Yo Yo Suhail Singh this is awesome"});
});

module.exports = router;
