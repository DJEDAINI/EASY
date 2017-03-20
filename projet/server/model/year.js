module.exports = function(mongoose){
        var yearSchema = mongoose.Schema({
                        name : String,
                        specs : [{
                          specName : {type: mongoose.Schema.Types.ObjectId, ref: 'Spec'},
                          firstSemestre : [{type : mongoose.Schema.Types.ObjectId, ref: 'Section'}],
                          secondSemestre :[{type : mongoose.Schema.Types.ObjectId, ref: 'Section'}]
                        }]

                    } , {collection : 'year'});
    return mongoose.model('Year', yearSchema);
  }
