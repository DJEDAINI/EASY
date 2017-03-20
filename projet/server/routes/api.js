var express = require('express');
var router = express.Router();
var mongojs  = require("mongojs");
var db = mongojs("mongodb://U.P.:MECHARNIAthamer9@ds113000.mlab.com:13000/easy");
var mongoose = require("mongoose");

//Connect to Database
mongoose.connect("mongodb://U.P.:MECHARNIAthamer9@ds113000.mlab.com:13000/easy");

//The Student Schema
var studentSchema = mongoose.Schema({
                        nom : {type : String , required : true} ,
                        prenom : {type : String , required : true} ,
                        matricule : String ,
                        sexe : String , 
                        mail: {type : String , required : true} , 
                        address : String , 
                        tell : String
                    } , {collection : 'etudiant'});
//The Section Schema
var sectionSchema = mongoose.Schema({
                        id : {type : String , required : true} , 
                        numero : String , 
                        anneeScolaire : {type : String , required : true}
                    } , {collection : 'section'});

//The Group Schema
var groupSchema = mongoose.Schema({
                        id : {type : String , required : true} , 
                        numero : String
                    } , {collection : 'groupe'});
    
//Models
var studentModel = mongoose.model("etudiant" , studentSchema);
var sectionModel = mongoose.model("section" , sectionSchema);
var groupModel = mongoose.model("group" , groupSchema);

//GET All Sections
router.get('/sections', function(req, res , next) {
     // res.render('index_api.html');
      sectionModel.find(function(err , section){
          if(err){

          }
          else {
              res.json(section);
          }
      });
    });



//GET All Groups
router.get('/groups', function(req, res , next) {
     // res.render('index_api.html');
      groupModel.find(function(err , groups){
          if(err){

          }
          else {
              res.json(groups);
          }
      });
    });


//GET All Students
router.get('/students', function(req, res , next) {
     // res.render('index_api.html');
     StudetnModel.find(function(err , etudiant){
          if(err){
            res.json(err);
          }
          else {
              res.json(etudiant);
          }
      });
    });

//GET All Levels
router.get('/levels', function(req, res , next) {
     // res.render('index_api.html');
     StudetnModel.find(function(err , etudiant){
          if(err){
            res.json(err);
          }
          else {
              res.json(etudiant);
          }
      });
    });

//GET One Student
router.get('/students/:email', function(req, res , next) {
     // res.render('index_api.html');
      studentModel.findOne({mail : req.params.email} , function(err , student){
          if(err){

          }
          else {
             // res.json(req.params.email);
              res.json(student);
          }
      });
    });

//Add Student
router.post('/student/add', function(req, res , next) {
    var student  = new studentModel({
                        nom : req.params.nom ,
                        prenom : req.params.prenom ,
                        matricule : req.params.matricule ,
                        sexe : req.params.sexe , 
                        mail: req.params.mail , 
                        address : req.params.address , 
                        tell : req.params.tell
                    });
      student.save();
      res.send("New Student added!!");
    });

//Add Group
router.post('/group/add', function(req, res , next) {
    var group  = new groupModel({
                        id : req.params.id ,
                        numero : req.params.numero ,
                    });
      group.save();
      res.send("New Group added!!");
    });

//Add Section
router.post('/section/add', function(req, res , next) {
    var section  = new sectionModel({
                        id : req.params.id ,
                        numero : req.params.numero ,
                        anneeScolaire : req.params.year
                    });
      section.save();
      res.send("New Section added!!");
    });



module.exports = router ;
