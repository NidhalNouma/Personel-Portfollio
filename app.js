const express = require('express')
const path = require('path')
const app = express()
require("dotenv").config()

const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'html')))

app.get('/', (req, res) => {
	res.sendFile('index1.html', { root: path.join(__dirname, './html') });
})

app.get('*', (req, res) => {
	res.redirect('/');
})

app.listen(port, () => {
	  console.log(`Example app listening at http://localhost:${port}`)
})
