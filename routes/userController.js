const express = require('express');
const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId;

const {UserModel} = require('../models/userModel');

router.get('/', (rep, res) => {
    UserModel.find((err, docs) => {
        //console.log(docs);
        if(!err) res.send(docs);
        else console.log("error to get data: " + err);
    })
})
router.post('/',(req, res) => {
    console.log("simo",req.body)
    const newUser = new UserModel({
        user_name: req.body.user_name,
        matricule: req.body.matricule,
        adresse_mail: req.body.adresse_mail,
        password: req.body.password
    })
    newUser.save((err, docs) =>{
        if(!err) res.send(docs);
        else console.log("error de enregistrement: " + err)
    }) 
})
router.put("/:id", (req, res) =>{
    if(!ObjectID.isValid(req.params.id))
        return res.status(400).send("l' utilisateur avec cette id n'esiste pas: " + err);

    const updateUser = {
        user_name: req.body.user_name,
        matricule: req.body.matricule,
        adresse_mail: req.body.adresse_mail,
        password: req.body.password
    }
    UserModel.findByIdAndUpdate(
        req.params.id,
        {$set: updateUser},
        { new: true },
        (err, docs) => {
            if(!err) res.send(docs);
            else console.log("Update error: " + err);
        }
    )
})
router.delete("/:id", (req, res) =>{
    if(!ObjectID.isValid(req.params.id))
        return res.status(400).send("l' utilisateur avec cette id n'esiste pas: " + err);
    
    UserModel.findByIdAndRemove(
        req.params.id,
        (err, docs) => {
            if (!err) res.send(docs);
            else console.log("Delete error: " + err);
        }
    )
})

module.exports = router 