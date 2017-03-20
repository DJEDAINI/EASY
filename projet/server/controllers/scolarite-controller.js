module.exports = function(Groupe, Section, Student, Year, Spec){ 

    function addGroupe(obj, callback){
        let groupe = new Groupe(obj);
        groupe.save( (err, groupe) => {
            Section.findByIdAndUpdate(obj.section,
                    {$push: {groupes: groupe._id}},
                    {new: true}, (err) => {});
            callback(err, groupe);
        });
    }

    function addSection(obj, callback){
        let section = new Section(obj);
        section.save( (err, section) => {
            callback(err, section);
        } );
    }

    function addStudent(obj, callback){
        let student = new Student(obj);
        student.save( (err, student) => {
            Groupe.findByIdAndUpdate(obj.groupe, 
                    {$push: {students : student._id}}, 
                    {new: true}, () => {});
            callback(err, student);
        } );
    }

    function addYear(obj, callback) {
        let year = new Year(obj);
        year.save( (err, year ) => {
            callback(err, year);
        } );
    }

    function addSpec(obj, callback) {
        let spec = new Spec(obj);
        spec.save( (err, spec) => {
            callback(err, spec);
        } );
    }

    function addSpecToYear(obj, callback){
        Year.findByIdAndUpdate(obj.yearId, {$push : {specs : {specName: obj.specId}}}, {new: true}, (err, year) => {
            callback(err, year);
        });
    }

    function getAllStudents(callback) {
        Student.find({}, (err, students) => {
            callback(err, students);
        });
    }

    function getAllGroupes(callback) {
        Groupe.find({}, (err, groupes) => {
            callback(err, groupes);
        });
    }

    function getAllSections(callback) {
        Section.find({}, (err, sections) => {
            callback(err, sections);
        });
    }

    function getStudentsByGroupe(groupe, callback){
        Groupe.findOne({_id : groupe }).populate('students').exec( (err, groupe) => {
            callback(err, groupe);
        });
    }

    function getStudentsBySection(section, callback) {
        Section.findOne({_id: section}).populate({
            path: 'groupes',
            populate: {
                path : 'students'
            }
        }).exec( (err, section ) => {
            callback(err, section);
        });
    }

    function getSpecs(callback) {
        Spec.find({}, (err, specs) => {
            callback(err, specs);
        });
    }

    function getYears(callback) {
        Year.find({}, (err, years) => {
            callback(err, years);
        });
    }

    return{
        addStudent,
        addGroupe,
        addSection,
        getAllSections,
        getAllGroupes,
        getAllStudents,
        getStudentsByGroupe,
        getStudentsBySection,
        addYear,
        addSpec,
        addSpecToYear,
        getSpecs,
        getYears
    }
}
