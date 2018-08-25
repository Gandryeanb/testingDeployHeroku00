const Student = require('../models').Student

class ControllerStudent {

    static findAll(req, res) {

        Student.findAll(
            {order:[['id','ASC']]}
        )
        .then(datas => {
            res.render('student', {data : datas})
        })
        .catch(err  => {
            res.send(err)
        })
    }

    static update(req, res) {
        let id = req.params.id
        console.log(req.body);
        Student.update(
            req.body,
            {where: {id : id}}
        )
        .then(() => {
            res.redirect('/student')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static studentUpdate(req, res) {
        let id = req.params.id
        
        Student.findOne(
            {where: {id: id}}
        )
        .then(data => {
            res.render('studentUpdate', {data})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static remove(req, res) {
        Student.destroy(
            {where: {id : req.params.id}}
        )
        .then(() => {
            res.redirect('/student')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static studentAdd(req, res) {
        res.render('studentAdd')
    }

    static add(req, res) {
        Student.create(
            req.body
        )
        .then(()=> {
            res.redirect('/student')
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = ControllerStudent