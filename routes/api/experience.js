const express = require('express');
const router = express.Router();
const experienceCtrl = require('../../controllers/api/experience');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/users

router.get('/', experienceCtrl.getAll);
router.post('/', experienceCtrl.create);



module.exports = router;