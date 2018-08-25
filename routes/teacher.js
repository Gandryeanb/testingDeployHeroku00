const Routes = require('express').Router()
const ControllerTeacher = require('../controller/controllerTeacher')

Routes.get('/',ControllerTeacher.findAll)
Routes.post('/update/:id', ControllerTeacher.update)
Routes.get('/update/:id', ControllerTeacher.teacherUpdate)
Routes.get('/delete/:id', ControllerTeacher.remove)
Routes.post('/add', ControllerTeacher.add)
Routes.get('/add', ControllerTeacher.teacherAdd)

module.exports = Routes