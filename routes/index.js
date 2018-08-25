const Routes = require('express').Router()
const studentRoutes = require('./student')
const teacherRoutes = require('./teacher')
const subjectRoutes = require('./subject')

Routes.use('/student',studentRoutes)
Routes.use('/teacher',teacherRoutes)
Routes.use('/subject',subjectRoutes)

Routes.get('/', (req, res) => {
    res.render('home',{msg:"Home Page School"})
})

module.exports = Routes