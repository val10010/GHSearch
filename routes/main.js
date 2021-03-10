const {Router} = require('express');
const router = Router();
const fs = require('fs');
const env = process.env.NODE_ENV;
const {getRepositoriesService} = require('../services/getRepositoriesService');

router.post('/', async (req, res) => {
    const value = encodeURIComponent(req.body.value);
    const page = req.body.page || 1
    const result = await getRepositoriesService(value, page);

    if(result && result.status === 200) {
        res.status(200).json({success: true, data: result.data, status: result.status});
    } else {
        res.status(200).json({success: false, items: [], status: result.status});
    }
});

router.get('/', async (req, res) => {
    try {
        res.send('I be ready!');
    } catch (e) {
        res.status(500).json({message: 'Oh, snap...something went wrong.'})
    }
});

module.exports = router;