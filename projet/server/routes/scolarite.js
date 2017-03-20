
module.exports = function(express, scolariteController) {

    const router = express.Router();

    router.post('/add-groupe', (req, res) => {
        scolariteController.addGroupe(req.body, (err, groupe) => {
          if(err ) throw err;
          res.json(groupe);
        });
    });

    router.post('/add-year', (req, res) => {
        scolariteController.addYear(req.body, (err, year) => {
            if(err) throw err;
            res.json(year);
        });
    });

    router.post('/add-spec', (req, res) => {
        scolariteController.addSpec(req.body, (err, spec) => {
            if(err) throw err;
            res.json(spec);
        });
    });

    router.post('/add-spec-to-year', (req, res) => {
        scolariteController.addSpecToYear(req.body, (err, year) => {
            if(err) throw err;
            res.json(year);
        })
    })

    router.post('/add-section', (req, res) => {
        scolariteController.addSection(req.body, (err, section) => {
          if(err ) throw err;
          res.json(section);
        });
    });

    router.post('/add-student', (req, res) => {
        scolariteController.addStudent(req.body, (err, student) => {
          if(err ) throw err;
          res.json(student);
        });
    });

    router.get('/get-sections', (req, res) => {
        scolariteController.getAllSections((err, sections) => {
            if(err) throw err;
            res.json(sections);
        });
    });

    router.get('/get-groupes', (req, res) => {
        scolariteController.getAllGroupes((err, groupes) => {
            if(err) throw err;
            res.json(groupes);
        });
    });

    router.get('/get-students', (req, res) => {
        scolariteController.getAllStudents((err, students) => {
            if(err) throw err;
            res.json(students);
        });
    });

    router.get('/get-specs', (req, res) => {
        scolariteController.getSpecs((err, specs) => {
            if(err) throw err;
            res.json(specs);
        });
    });

    router.get('/get-years', (req, res) => {
        scolariteController.getYears((err, years) => {
            if(err) throw err;
            res.json(years);
        });
    });

    //une fonction qui renvoi la liste des étudiants dans un groupe donné
    //elle accepte comme paramètre l'identifiant du groupe.
    router.get('/get-students-by-groupe/:groupe', (req, res) => {
        scolariteController.getStudentsByGroupe(req.params.groupe, (err, students) => {
            if(err) throw err;
            res.json(students);
        });
    });

    // une route qui recupere la liste des étudiants par section
    // elle accepte comme paramètre l'identifiant de la section
    router.get('/get-students-by-section/:section', (req, res) => {
        scolariteController.getStudentsBySection(req.params.section, (err, students) => {
            if(err) throw err;
            res.json(students);
        });
    });

   return router;
}
