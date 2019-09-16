var express = require('express');
var multer  = require('multer');
var router= express.Router();

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '.jpg')
    }
  });
  
  var upload = multer({ storage: storage }).single('profileImage');

  router.post('/', function (req, res) {
    upload(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(500).json(err)
      } else if (err) {
        return res.status(500).json(err)
      }
      return res.json({
           success: true,
           message: 'Image Uploaded',
      });
        
      // Everything went fine.
    })
  });
  module.exports = router;
//Item model
// const Item = require('../../models/Item');

//@routes GET api/items
//@desc   Get all Items
//@access Public
// router.get('/', (req, res) => {
//    Item.find({})
//        .sort({ date: -1})
//        .then(items => res.json(items))
// });

//@routes POST api/items
//@desc   add Image
//@access Public
// router.post('/', (req, res) => {
//     const newItem = new Item({
//       // image: req.file.image,
//       name: req.body.name,
//       contact: req.body.contact 
//     });
//     newItem.save().then(item => res.json(item));         
//  });

 