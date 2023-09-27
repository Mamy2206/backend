const router = require('express').Router() 
const formateurs = require('../controllers/formateur.controller')

router.get('/', formateurs.getAll)
router.get('/:id', formateurs.getById)
router.post('/', formateurs.insert)
router.put('/:id', formateurs.update)
router.delete('/:id', formateurs.delete)
router.get('/formateur/formation', formateurs.getAllFormationParFormateur)

module.exports = router