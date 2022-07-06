const Parent= require('../models/parent.model');
//Create student in postman = POST
exports.parent_create = function (req, res) {
    let parent = new Parent(
        {
            name: req.body.name,
            age: req.body.age,
            gender : req.body.gender
        }
    );
    return parent
    .save()
    .then((newparent) => {
      return res.status(201).json({
        success: true,
        message: 'New parent created successfully',
        newparent: newparent,
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
exports.parent_details = function(req, res){
    Parent.find()
        .then((parent) =>{
            return res.status(200).send(parent )
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
exports.parent_details_id = function (req, res) {
    Parent.findById(req.params.id)
        .then((parent) =>{
            return res.status(200).send(parent )
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
exports.parent_update = function (req, res) {
    Parent.findByIdAndUpdate(req.params.id, {$set: req.body})
        .exec()
        .then(() => {
            res.status(200).json({
                success: true,
                message: 'Parent is updated',
                updateParent: req.body,
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
exports.parent_delete = function (req, res) {
    Parent.findByIdAndRemove(req.params.id)
        .exec()
        .then(()=> res.status(200).json({
            success: true,
            message: 'Parent is delete'
        }))
        .catch((err) => res.status(500).json({
            success: false,
            message: 'Server error. Please try again.',
            error: err.message
        }));
}