import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { getItems, deleteItem, editItem, selectedItem } from '../actions/itemAction';
import { PropTypes } from 'prop-types';
import moment from 'moment';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Paths } from '../enums';
import ButtonBase from '@material-ui/core/ButtonBase';
// import { NavigationMoreVert, EditorModeEdit, ContentRemove } from 'material-ui/icons';
// import { Divider } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    // maxWidth: 500,
    // textAign: 'center',
    color: theme.palette.text.secondary,
  },

  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const ListDetails = (props) => {
  const classes = useStyles();

// const [id, setOnDelete] = useState({item});
// console.log('light', props)

// useEffect(() => {
//   console.log('It Works', props);
// }, [props]);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function onEditClick(item){
    props.selectedItem(item);
    props.history.push(Paths.EDIT_ITEM);
    // console.log('edit item:', item)
  }

  function onDeleteClick(item){
     //props.deleteItem(id);
    // console.log('id', id)
    // props.history.push(Paths.ITEMS);
    props.history.push(Paths.ITEM_CONFIRM);
  }

  function handleBackClick(){
    props.history.push(Paths.ITEMS);
  }

  const [anchorEl, setAnchorEl] = React.useState(null);

  return (
    <div className={classes.root}><br />
       Employee Details
       <Grid 
          container
          direction="row"
          justify="flex-end"
          alignItems="flex-end" >
          <Button variant="outlined" color="primary" onClick={handleBackClick} >
            <ArrowBackIcon /> Back
          </Button>
       </Grid>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              {
                props.item && props.item.image ? 
                <img className={classes.img} alt="complex" src={`/uploads/${props.item.image}`} /> 
                : <img className={classes.img} alt="complex" src={`/uploads/defaultAvatar.png`} />
              }
              
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="caption" display="block">Date:</Typography> 
                <Typography variant="button" gutterBottom><b>{ props.item ? moment(props.item.date).format('MMM. DD, YYYY') : ''}</b></Typography>
              </Grid>

              <Grid item xs>
                <Typography variant="caption" display="block">Firstname:</Typography> 
                <Typography variant="button" gutterBottom><b>{ props.item ? props.item.firstName : ''}</b></Typography>
              </Grid>

              <Grid item xs>
                <Typography variant="caption" display="block">Lastname:</Typography> 
                <Typography variant="button" gutterBottom><b>{ props.item ? props.item.lastName : ''}</b></Typography>
              </Grid>

              <Grid item xs>
                <Typography variant="caption" display="block">Email:</Typography> 
                <Typography variant="button" gutterBottom><b>{ props.item ? props.item.email : ''}</b></Typography>
              </Grid>

              <Grid item xs>
                <Typography variant="caption" display="block">Contact:</Typography> 
                <Typography variant="button" gutterBottom>
                  <b>{ props.item ? '(+' + props.item.contact.replace(/(\d{2})(\d{3})(\d{3})/, '$1) $2-$3-') : ''}</b>
                </Typography> 
              </Grid>
              
              {/* <Grid item> 
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Remove
                </Typography>
              </Grid> */}
            </Grid>

            <Grid item>
              <IconButton  
                aria-controls="simple-menu" 
                aria-haspopup="true"
                onClick={handleClick}
              >
                 <MoreVertIcon />
              </IconButton> 
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted 
                open={Boolean(anchorEl)}  
                onClose={handleClose} 
              > 
                <MenuItem onClick={() => onEditClick(props.item)} ><EditIcon color="primary"/> Edit</MenuItem>
                <MenuItem onClick={() => onDeleteClick(props.item._id)} ><DeleteIcon color="primary"/> Delete</MenuItem>
              </Menu>

            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

ListDetails.propTypes = {
  // onEdit: PropTypes.func.isRequired,
  // onDelete: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
 item: state.item.selectedItem
});

// export default ListDetails;
export default connect(mapStateToProps, { getItems, deleteItem, selectedItem })(ListDetails);