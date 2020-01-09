const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.post('/register', ctrl.auth.register);
router.post('/login', ctrl.auth.login);
router.get('/verify', ctrl.auth.verify);
router.delete('/logout', ctrl.auth.logout);
router.put('/update/:id', ctrl.auth.updateUser);
router.get('/:id', ctrl.auth.userDetail);
router.delete('/delete/:id', ctrl.auth.deleteUser);

module.exports = router;
