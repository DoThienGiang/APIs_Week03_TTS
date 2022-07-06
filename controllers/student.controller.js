const Student= require('../models/student.model');
//Create student in postman = POST
exports.student_create = function (req, res) {
    let student = new Student(
        {
            name: req.body.name,
            age: req.body.age,
            gender : req.body.gender
        }
    );
    return student
    .save()
    .then((newStudent) => {
      return res.status(201).json({
        success: true,
        message: 'New student created successfully',
        newStudent: newStudent,
      });
    })
    .catch((error) => {
        console.log(error);
        res.status(400).json({
            success: false,
            message: 'Server error. Please try again.',
            error: error.message,
      });
    });
};


//Show all student in postman = GET
exports.student_details = function(req, res){
    Student.find()
        .then((student) =>{
            return res.status(200).send(student )
        })
        .catch((err) => {
            res.status(400).json({
                success: false,
                message: 'Server error. Please try again.',
                error: err.message,
            })
        })
}


// Show students by Id in postman = GET
exports.student_details_id = function (req, res) {
    Student.findById(req.params.id)
        .then((student) =>{
            return res.status(200).send(student )
        })
        .catch((err) => {
            res.status(400).json({
              success: false,
              message: 'This student does not exist',
              error: err.message,
            });
        });
};

// Update student in postman = PUT
exports.student_update = function (req, res) {
    Student.findByIdAndUpdate(req.params.id, {$set: req.body})
        .exec()
        .then(() => {
            res.status(200).json({
                success: true,
                message: 'Student is updated',
                updateStudent: req.body,
        });
    })
    .catch((err) => {
        res.status(400).json({
          success: false,
          message: 'Server error. Please try again.',
          error: err.message,
        });
      });
};

//Delete student in postman = DELETE
exports.student_delete = function (req, res) {
    Student.findByIdAndRemove(req.params.id)
        .exec()
        .then(()=> res.status(200).json({
            success: true,
            message: 'Student is delete'
        }))
        .catch((err) => res.status(500).json({
            success: false,
            message: 'Server error. Please try again.',
            error: err.message
        }));
}