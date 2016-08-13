var expreess = require("express");
var app = express();

app.use("/",static("public"));

app.listen(3000, function () {
  console.log('server listening on port 3000!');
});

