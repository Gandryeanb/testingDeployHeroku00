const Subject = require('../models').Subject

class ControllerSubject{

    static findAll(req, res) {
        Subject.findAll(
            {order:  [['id','ASC']]}
        )
        .then(datas => {
            res.render('subject', {data : datas})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static update(req, res) {
        let id = req.params.id
        
        Subject.update(
            req.body,
            {where: {id : id}}
        )
        .then(() => {
            res.redirect('/subject')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static subjectUpdate(req, res) {
        let id = req.params.id
        
        Subject.findOne(
            {where: {id: id}}
        )
        .then(data => {
            // res.send(data)
            res.render('subjectUpdate', {data})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static remove(req, res) {
        Subject.destroy(
            {where: {id : req.params.id}}
        )
        .then(() => {
            res.redirect('/subject')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static subjectAdd(req, res) {
        res.render('subjectAdd')
    }

    static add(req, res) {
        Subject.create(
            req.body
        )
        .then(()=> {
            res.redirect('/subject')
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = ControllerSubject