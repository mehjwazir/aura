const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts');
// const upload = require("multer")();
// const photosCtrl = require('../../controllers/api/photos');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/users

router.get('/discover', ensureLoggedIn, postsCtrl.getAll);
router.post('/experience', ensureLoggedIn, postsCtrl.create);
router.get('/posts', ensureLoggedIn, postsCtrl.getAllUserPost)
router.delete('/:id', ensureLoggedIn, postsCtrl.deletePost);
router.put('/:id', ensureLoggedIn, postsCtrl.editPost);




//add between router post and postsCtrl.create upload.single('photo'),
//router.post('/upload', upload.single('photo'), photosCtrl.upload);
module.exports = router;