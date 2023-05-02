const express = require('express')
const app = express()
const cors = require('cors')

const chefs = require('./data/chefs.json')
const feedBacks = require('./data/feedback.json')
const recipe = require('./data/cookingRecipe.json')

app.use(cors()); 
app.get('/', (req, res)=>{
    res.send('Japanese Nest Server')
})

app.get('/chefs', (req, res) =>{
    res.send(chefs)
})

app.get('/chefs/:id', (req, res) =>{
    const id = req.params.id
    const singleChef = chefs.find( c => c.id == id);
    res.send(singleChef)
})

app.get('/feedback', (req, res) =>{
    res.send(feedBacks)
})

app.get('/recipe', (req, res) =>{
    res.send(recipe)
})

app.get('/recipe/:id', (req, res)=>{
    const id = req.params.id
    const singleRecipe = recipe.find( r => r.id == id);
    res.send(singleRecipe) 
})

app.listen(5000, ()=>{
    console.log('server is on');
})