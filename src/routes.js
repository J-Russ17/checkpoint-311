const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', controller.listTeams);
router.get('/:id', controller.teamId);
router.post('/', controller.addTeam);
router.delete('/:id', controller.deleteTeam);
router.put('/:id', controller.updateTeam);

module.exports = router;
