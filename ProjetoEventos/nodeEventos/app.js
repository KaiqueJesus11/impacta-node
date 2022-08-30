var express = require('express');
   app = express();
   app.set('views', __dirname + '/views');
   app.set('view engine', 'ejs');
   app.use(express.static(__dirname + '/public'));
   
   app.listen(3000, function () {
       console.log("Aplicação no ar.");
});