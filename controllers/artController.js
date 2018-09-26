const db = require("../models");


module.exports = {
    findAll: function(req, res){
        db.Articles
            .find(req.query)
            .then(dbModel => res.json(dbModel));
    },
    create: function(req, res){
        db.Articles
            .create(req.body)
            .then(dbModel => res.json(dbModel));
    },
    remove: function(req, res){
        db.Articles
            .findBtId({
                _id: req.params.id
            })
            .then(dbMondel => dbModel.remove())
            .then(dbModel => res.json(dbModel));
    },
};