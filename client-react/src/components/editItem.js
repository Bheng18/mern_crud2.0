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
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import { Paths } from '../enums';
import { selectedItem, editItem } from '../actions/itemAction';

function EditItem(props) {
  const [open, setOpen] = React.useState(true);
  const [values, setValues] = useState({
      _id: props.item._id,
      name: props.item.name,
      contact: String(props.item.contact),
  });

//   function handleClickOpen() {
//     setOpen(true);
//   }

  function handleClose() {
    setOpen(false);
    props.history.push(Paths.ITEMS);
  }

//   function onChange(e) {
//     setValues({ [e.target.id]: e.target.values }); 
//      console.log('items values: ', values)
//   }

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
     console.log('handleChange', name)
  };


  function onSubmit(e){
    e.preventDefault();
    console.log('submit form:', values)
  //edit item via editItem method from redux
    props.editItem(values);
    props.history.push(Paths.ITEM);
    handleClose(); //close modal
 }

  return (
    <div><br />
      <form noValidate autoComplete="off">
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
         <AddIcon /> Add Employee
      </Button> */}
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Update Employee</DialogTitle>
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
            type="text"
            value={values.contact}
            onChange={handleChange('contact')}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary"><CancelIcon /> Cancel</Button>
          <Button onClick={onSubmit} color="primary"><SaveIcon /> Save</Button>
        </DialogActions>
      </Dialog>
      </form>
    </div>
  );
}

const mapStateToProps = state => ({
    item: state.item.selectedItem
 });
 
 export default connect(mapStateToProps, { editItem })(withRouter(EditItem)); 
