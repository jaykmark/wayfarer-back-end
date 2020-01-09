const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

//CITIES
router.get('/cities', ctrl.cities.index);
router.post('/cities', ctrl.cities.create);
router.get('/cities/:id', ctrl.cities.show);
router.put('/cities/update/:id', ctrl.cities.update);
router.delete('/cities/delete/:id', ctrl.cities.destroy);

// POSTS
router.get('/posts', ctrl.posts.allPosts);
router.post('/posts', ctrl.posts.newPost);
router.get('/posts/:id', ctrl.posts.postDetail);
router.put('/posts/:id', ctrl.posts.editPost);
router.delete('/posts/:id', ctrl.posts.deletePost);

// COMMENTS
router.get('/comments', ctrl.comments.index);
router.post('/comments', ctrl.comments.create);
router.get('/comments/:id', ctrl.comments.show);
router.put('/comments/:id', ctrl.comments.upDate);
router.delete('/comments/:id', ctrl.comments.destroy);

module.exports = router;
