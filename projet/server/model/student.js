
module.exports = function(mongoose){
      var studentSchema = mongoose.Schema({
          
                        name: {type : String , required : true} ,
                        lastname: {type : String , required : true} ,
                        matricule : String ,
                        sexe : String , 
                        mail: {type : String , required : true} , 
                        address : String , 
                        tell : String,
                        groupe : {type : mongoose.Schema.Types.ObjectId, ref: 'Groupe'}
                    } , {collection : 'student'});
    return mongoose.model('Student', studentSchema);
}
