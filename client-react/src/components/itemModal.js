import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import { Paths } from '../enums';
import { addItem } from '../actions/itemAction';
import Message from './Message';
// import Snackbar from '@material-ui/core/Snackbar';

// import FileUpload from './fileUpload';
// import DropzoneAreaExample from './fileUploadDrop';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    // display: 'none',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 250,
  },
}));

function ItemModal(props) { //main function
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = useState({
      firstName: '',
      lastName: '',
      email: '',
      contact: '',
  });
  //upload image section
  // const [file, setFile] = useState('');
  // const [fileName, setFileName] = useState('Choose File');
  const [disableTxtField, setDisabledTxtField] = useState(true);
  const [uploadBtn, setUploadBtn] = useState(true);
  const [uploadedFile, setUploadFile] = useState({});
  const [message, setMessage] = useState('');
  //_____________________________//  

  const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)
      console.log('selctedFile', selectedFile.name);
        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile]);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
    setPreview(undefined) // to remove preview image
    setMessage(''); //set message to null
  }

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
    // console.log('handleChange', name)
  };

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
        setSelectedFile(undefined)
        return
    }
    setUploadBtn(false);
    console.log('filez: ', e.target.files[0].name)
    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
    setMessage(''); // set the message to null
}

  function onSubmit(e){
    e.preventDefault();
    const newItem = {
        image: selectedFile ? selectedFile.name : '',
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        contact: values.contact
    }
    // upload();
    console.log('submit form:', newItem)
  //add item via add item
    props.addItem(newItem);
    props.history.push(Paths.ITEM);
    handleClose(); //close modal
    setValues('');
    setSelectedFile('');
    setMessage('');
 }

 //upload image section
//  const onChange = (e) => {
//   // console.log('filez: ', e.target.files[0].name)
// //  setFile(e.target.files[0]);
//  setFileName(e.target.files[0].name);
//  }

  const upload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', selectedFile);

    try{
      const res = await axios.post('/api/uploads', formData, {
        headers: {'Content-Type': 'multipart/form-data'}
      });

      const { fileName, filePath } = res.data;
      setUploadFile({ fileName, filePath });
      setMessage('File successfully uploaded!.');
      setDisabledTxtField(false);
    }catch(err){
       if(err.response.status === 500){
          setMessage('There was a problem in server');
       }else{
          setMessage(err.response.data.msg);
       }
    }

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
          {/* <DialogContentText>
             Please enter your name and contact here. We will send updates.
          </DialogContentText> */}
          {message ? <Message msg={message} /> : null}
          <br />
           {/* <FileUpload /> */}
           {/* <DropzoneAreaExample /> */}
           {
              selectedFile ? 
              <div>
                  {/* <h3>{uploadedFile.fileName}</h3> */}
                  <img style={{width: '30%'}} src={preview} alt={uploadedFile.fileName} />
              </div>
              : <div>
                    <img style={{width: '20%'}} src={`/uploads/defaultAvatar.png`} alt={'default avatar'} />
                </div>
            }
            <br />
            <input
              accept="image/*"
              className={classes.input}
              id="outlined-button-file"
              // value={values.image}
              // multiple
              onChange={onSelectFile}
              type="file"
            /> 
          <label htmlFor="outlined-button-file">
            <Button variant="outlined" component="span" 
              disabled={uploadBtn} 
              className={classes.button} onClick={upload} >
              {'Upload image'}
            </Button>
          </label>

          <TextField
            autoFocus
            required
            margin="dense"
            id="firstName"
            label="FirstName"
            type="text"
            value={values.firstName || ''}
            onChange={handleChange('firstName')}
            className={classes.textField}
            // fullWidth
            // disabled={disableTxtField} //this is working just uncomment it
          />

          <TextField
            required
            margin="dense"
            id="lastName"
            label="LastName"
            type="text"
            value={values.lastName || ''}
            onChange={handleChange('lastName')}
            className={classes.textField}
            // fullWidth
            // disabled={disableTxtField} //this is working just uncomment it
          />

          <TextField
            required
            margin="dense"
            id="email"
            label="Email"
            type="email"
            value={values.email || ''}
            onChange={handleChange('email')}
            className={classes.textField}
            // fullWidth
            // disabled={disableTxtField} //this is working just uncomment it
          />

          <TextField
            required
            margin="dense"
            id="contact"
            label="Contact no."
            type="number"
            value={values.contact || ''}
            onChange={handleChange('contact')}
            className={classes.textField}
            // fullWidth
           // disabled={disableTxtField} //this is working just uncomment it
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary"><CancelIcon />Cancel</Button>
          <Button onClick={onSubmit} color="primary"><SaveIcon />Save</Button>
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
