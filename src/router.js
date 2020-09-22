const {Delete, Get, Post, Put, GetById} = require("./Task");
const {Router} = require('express')

const router = Router()

router.get('/tasks', Get)
router.get('/tasks/:id', GetById)
router.post('/tasks', Post)
router.put('/tasks/:id', Put)
router.delete('/tasks/:id', Delete)


module.exports = router
