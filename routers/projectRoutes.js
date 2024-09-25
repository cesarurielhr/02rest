const express = require('express');
const router = express.Router();

const projectController = require('../controllers/projectController');
const authenticateToken = require('../Middleware/authMiddleware');

router.get('/',authenticateToken,projectController.getAllProjects);
router.post('/',authenticateToken,projectController.createProject);

module.exports = router;