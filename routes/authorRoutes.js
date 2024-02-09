// 3. Import EXPRESS, ROUTER from EXPRESS and CONTROLLER 
const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');

///// DEFINE API ROUTES /////

// GET ALL
router.get('/', authorController.author_list);

// GET by Name
router.get('/:name', authorController.get_author_by_name);

// POST new Author
router.post('/', authorController.add_author);

// PUT (edit) Author
router.put('/:name', authorController.edit_author);

// DELETE Author
router.delete('/:name', authorController.delete_author);

// 4. export the router, it will be used in index.json
module.exports = router;