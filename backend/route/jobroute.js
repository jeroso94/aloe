const express = require('express');
const router = express.Router();

const jobCtrl = require('../controller/jobController');

//Publier un job
router.post('/publish', jobCtrl.publishJob);

//Afficher tous les jobs
router.get('/load', jobCtrl.loadJobs);

module.exports = router;