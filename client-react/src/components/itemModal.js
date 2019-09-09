import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import { Paths } from '../enums';
import { addItem } from '../actions/itemAction';

function ItemModal(props) {
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = useState({
      name: '',
      contact: '',
  });

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

//   function onChange(e) {
//     setValues({ [e.target.id]: e.target.values }); 
//      console.log('items values: ', values)
//   }

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
    // console.log('handleChange', name)
  };


  function onSubmit(e){
    e.preventDefault();
    const newItem = {
        name: values.name,
        contact: values.contact
    }
    console.log('submit form:', newItem)
  //add item via add item
    props.addItem(newItem);
    props.history.push(Paths.ITEM);
    handleClose(); //close modal
 }

  return (
    <div><br />
      <form noValidate autoComplete="off">
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
         <AddIcon /> Add Employee
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Employee</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your valid name and contact number here. We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="LastName, FirstName"
            type="text"
            value={values.name}
            onChange={handleChange('name')}
            fullWidth
          />
          <TextField
            margin="dense"
            id="contact"
            label="Contact no."
            type="number"
            value={values.contact}
            onChange={handleChange('contact')}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={onSubmit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
      </form>
    </div>
  );
}

const mapStateToProps = state => ({
    item: state.item
 });
 
 export default connect(mapStateToProps, { addItem })(withRouter(ItemModal)); 
