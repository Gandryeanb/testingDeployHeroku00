const Teacher = require('../models').Teacher

class ControllerTeacher{

    static findAll(req, res) {
        Teacher.findAll(
            {order:  [['id','ASC']]}
        )
        .then(datas => {
            res.render('teacher', {data : datas})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static update(req, res) {
        let id = req.params.id
        
        Teacher.update(
            req.body,
            {where: {id : id}}
        )
        .then(() => {
            res.redirect('/teacher')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static teacherUpdate(req, res) {
        let id = req.params.id
        
        Teacher.findOne(
            {where: {id: id}}
        )
        .then(data => {
            res.render('teacherUpdate', {data})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static remove(req, res) {
        Teacher.destroy(
            {where: {id : req.params.id}}
        )
        .then(() => {
            res.redirect('/teacher')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static teacherAdd(req, res) {
        res.render('teacherAdd')
    }

    static add(req, res) {
        Teacher.create(
            req.body
        )
        .then(()=> {
            res.redirect('/teacher')
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = ControllerTeacher