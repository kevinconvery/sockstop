const express = require('express');
const path = require('path')

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// an api endpoint that returns a short list of items:
app.get('/api/getList', (req, res) => {
  let list = ["One Sock", "Two Sock", "Three Sock"];
  res.json(list);
  console.log('Sent list of items');
})

app.get('/', (req, res) => {
  res.send('Hello, socks!!');
});

app.listen(5000, () => console.log("Sock app listening on port 5000!"));
