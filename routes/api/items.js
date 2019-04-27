const express = require('express');
const router= express.Router();

//Item model
const Item = require('../../models/Item');

//@routes GET api/items
//@desc   Get all Items
//@access Public
router.get('/', (req, res) => {
   Item.find({})
       .sort({ date: -1})
       .then(items => res.json(items))
});

//@routes POST api/items
//@desc   add Item
//@access Public
router.post('/', (req, res) => {
    const newItem = new Item({
      name: req.body.name,
      contact: req.body.contact 
    });
    newItem.save().then(item => res.json(item));         
 });

//@routes DELETE api/items/:id
//@desc   delete Item
//@access Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
    .then(item => item.remove().then(()=>res.json({ success: true})))
    .catch(err => res.status(404).json({ success: false }));
});

//@routes Update api/items/:id
//@desc   Update Item
//@access Public
router.put('/', (req, res) => {
    Item.findOneAndUpdate({_id: req.body._id}, { $set: { name: req.body.name, contact: req.body.contact }}, {new: true}, (err, task) => {
      if (err)
        res.send(err);
      res.json(task);
    });
  });

 module.exports = router;