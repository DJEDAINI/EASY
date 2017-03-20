module.exports = function(mongoose){
        var sectionSchema = mongoose.Schema({
                        name : String,
                        year : {type : mongoose.Schema.Types.ObjectId, ref: 'Year'},
                        spec : String, 
                        semestre : Number,
                        groupes : [{type : mongoose.Schema.Types.ObjectId, ref: 'Groupe'}]
                    } , {collection : 'section'});
    return mongoose.model('Section', sectionSchema);
  }
