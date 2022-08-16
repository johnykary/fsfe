const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/demo', (req, res)=>{
  res.set('x-full-stack', '4life').status(418).send('I prefer coffee')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
