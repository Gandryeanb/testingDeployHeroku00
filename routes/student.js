const Routes = require('express').Router()
const ControllerStudent = require('../controller/controllerStudent')

Routes.get('/',ControllerStudent.findAll)
Routes.post('/update/:id', ControllerStudent.update)
Routes.get('/update/:id', ControllerStudent.studentUpdate)
Routes.get('/delete/:id', ControllerStudent.remove)
Routes.post('/add', ControllerStudent.add)
Routes.get('/add', ControllerStudent.studentAdd)

module.exports = Routes