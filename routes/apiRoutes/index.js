const router = require('express').Router();
const noteRoutes = require('../apiRoutes/note-routes');

router.use(noteRoutes);

module.exports = router;