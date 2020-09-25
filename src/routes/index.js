const { Router } = require('express');

const userRoute = require('./user');

const router = Router();

router.use('/api/v1', userRoute)
router.get('/', (req,res)=>{ res.status(200).send({status: true, message: 'Hello World!'})});
router.use('*', (req, res)=>{ res.status(404).send({status: false, message: 'Page Not Found'})});

module.exports = router;