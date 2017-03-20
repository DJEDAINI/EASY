
module.exports = function(mongoose){
      var groupeSchema = mongoose.Schema({
                       number : Number,
                        students : [{type : mongoose.Schema.Types.ObjectId, ref: 'Student'}],
                        section : {type : mongoose.Schema.Types.ObjectId, ref: 'Section'}

                    } , {collection : 'groupe'});
    return mongoose.model('Groupe', groupeSchema);
}
