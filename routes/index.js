const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Hello from the / route!'
    })
})

router.get('/curbrain', (req, res) => {
    res.json({
        success: true,
        message: 'Hello from the /curbrain route!'
    })
})

router.get('/geekonix', (req, res) => {
    res.json({
        success: true,
        message: 'Hello from the /geekonix route!'
    })
})

module.exports = router;