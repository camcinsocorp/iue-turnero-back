const express = require('express')
const app = express();
const fs = require('fs');


app.use(express.static(__dirname + '/dist/iue-turnero-ui'));

// app.get('/', (req, res) => {
//   res.writeHead(200, {'Content-Type': 'test/html'});
//   var frontend = fs.createReadStream(__dirname + '/dist/iue-turnero-ui/index.html', 'utf-8');
//   frontend.pipe(res);
// });

app.listen(3000, () => {
  console.log('Example app listening on port 8000!')
});