module.exports = function(mongoose){
        var specSchema = mongoose.Schema({
                        name : String,
                        courses : [String]
                    } , {collection : 'spec'});
    return mongoose.model('Spec', specSchema);
  }
