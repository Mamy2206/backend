const router = require('express').Router() 
const inscription = require('../controllers/inscription.controller')

router.get('/', inscription.getAll)
router.get('/:id', inscription.getById)
router.post('/', inscription.insert)
router.put('/:id', inscription.update)
router.delete('/:id', inscription.delete)

module.exports = router