const express = require('express')
 const path = require('path')
 const port = process.env.PORT || 8080
 
 const app = express()
 
app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname)))

app.get('/ping', (req, res) => {
  return res.send('pong');
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port)