const {Router} = require('express');
const router = Router();
const fs = require('fs');
const env = process.env.NODE_ENV;

router.post('/', async (req, res) => {


});

router.get('/', async (req, res) => {
    try {
        res.send('I be ready!');
    } catch (e) {
        res.status(500).json({message: 'Oh, snap...something went wrong.'})
    }
});

module.exports = router;