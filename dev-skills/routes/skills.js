const express = require('express');
const router = express.Router();
const skillController = require('../controllers/skills')
/* GET users listing. */
// /todos/ because we have to mount in the server.js as /todods
router.get('/', skillController.index);
router.get('/new', skillController.new)
router.get('/:id', skillController.show);
router.post('/', skillController.create);
router.delete('/:id', skillController.delete);

module.exports = router; 