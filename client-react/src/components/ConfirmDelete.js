import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { Paths } from '../enums';
import { selectedItem, editItem, deleteItem } from '../actions/itemAction';

function ConfirmDelete(props) {
  const [open, setOpen] = React.useState(true);

// console.log('item to delete:', props.item)

//   function handleClickOpen() {
//     setOpen(true);
//   }

  function handleClose() {
    setOpen(false);
    props.history.push(Paths.ITEMS);
  }

  function onDeleteConfirm(item){
      console.log('id=>', item._id)
    props.deleteItem(item._id);
    props.history.push(Paths.ITEMS);
  }

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Delete
      </Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete Confirmation"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
             Are you sure to delete { props.item ? props.item.name : '' } ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
             No
          </Button>
          <Button onClick={() => onDeleteConfirm(props.item)} color="primary" autoFocus>
             Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


const mapStateToProps = state => ({
    item: state.item.selectedItem
 });
 
 export default connect(mapStateToProps, { editItem, deleteItem })(withRouter(ConfirmDelete)); 
