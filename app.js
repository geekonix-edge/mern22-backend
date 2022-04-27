const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Hello from the / route!'
    })
})

app.get('/curbrain', (req, res) => {
    res.json({
        success: true,
        message: 'Hello from the /curbrain route!'
    })
})

app.get('/geekonix', (req, res) => {
    res.json({
        success: true,
        message: 'Hello from the /geekonix route!'
    })
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running!')
})