const router = require('express').Router() 
const users = require('../controllers/user.controller')

router.get('/', users.getAll)
router.get('/:id', users.getById)
router.post('/', users.insert)
router.put('/:id', users.update)
router.delete('/:id', users.delete)

module.exports = router