const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts');
const upload = require("multer")();
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/users

router.get('/discover', ensureLoggedIn, postsCtrl.getAll);
router.post('/experience', ensureLoggedIn, upload.single('photo'), postsCtrl.create);
router.get('/posts', ensureLoggedIn, postsCtrl.getAllUserPost)
router.delete('/:id', ensureLoggedIn, postsCtrl.deletePost);
router.put('/:id', ensureLoggedIn, postsCtrl.editPost);

module.exports = router;