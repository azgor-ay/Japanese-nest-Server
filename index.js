const express = require('express')
const app = express()
const cors = require('cors')

const chefs = require('./data/chefs.json')

app.use(cors()); 
app.get('/', (req, res)=>{
    res.send('Japanese Nest Server')
})

app.get('/chefs', (req, res) =>{
    res.send(chefs)
})

app.listen(5000, ()=>{
    console.log('server is on');
})