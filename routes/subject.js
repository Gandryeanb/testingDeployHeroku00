const Routes = require('express').Router()
const controllerSubject = require('../controller/controllerSubject')

Routes.get('/',controllerSubject.findAll)
Routes.post('/update/:id', controllerSubject.update)
Routes.get('/update/:id', controllerSubject.subjectUpdate)
Routes.get('/delete/:id', controllerSubject.remove)
Routes.post('/add', controllerSubject.add)
Routes.get('/add', controllerSubject.subjectAdd)

module.exports = Routes