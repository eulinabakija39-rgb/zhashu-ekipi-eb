const express = require('express');
const controller = require('../controllers/student.controller');

const router = express.Router();

// GET    /api/studentet       -> lista e studentëve
// GET    /api/studentet/:id   -> një student
// POST   /api/studentet       -> shto student
// DELETE /api/studentet/:id   -> fshi student
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.delete('/:id', controller.remove);

module.exports = router;
