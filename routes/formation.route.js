const router = require('express').Router() 
const formations = require('../controllers/formation.controller')

router.get('/', formations.getAll)
router.get('/:id', formations.getById)
router.post('/', formations.insert)
router.put('/:id', formations.update)
router.delete('/:id', formations.delete)

module.exports = router