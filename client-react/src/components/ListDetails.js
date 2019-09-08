import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { getItems, deleteItem, editItem, selectedItem } from '../actions/itemAction';
import { PropTypes } from 'prop-types';
import moment from 'moment';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
// import ButtonBase from '@material-ui/core/ButtonBase';
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

  // image: {
  //   width: 128,
  //   height: 128,
  // },
  // img: {
  //   margin: 'auto',
  //   display: 'block',
  //   maxWidth: '100%',
  //   maxHeight: '100%',
  // },
}));

const ListDetails = ({item}) => {
  const classes = useStyles();

// const [items, setItems] = useState(item);
// console.log('light', item)

// useEffect(() => {
//   console.log('It Works', props);
// }, [props]);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

    const [anchorEl, setAnchorEl] = React.useState(null);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          {/* <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
            </ButtonBase>
          </Grid> */}
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="caption" display="block">Date:</Typography> 
                <Typography variant="button" gutterBottom><b>{moment(item.date).format('MMM. DD, YYYY')}</b></Typography>
              </Grid>

              <Grid item xs>
                <Typography variant="caption" display="block">name:</Typography> 
                <Typography variant="button" gutterBottom><b>{item.name}</b></Typography>
              </Grid>

              <Grid item xs>
                <Typography variant="caption" display="block">Contact:</Typography> 
                <Typography variant="button" gutterBottom><b>{'(+' + item.contact.replace(/(\d{2})(\d{3})(\d{3})/, '$1) $2-$3-')}</b></Typography>
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
                <MenuItem 
                    // onClick={onEdit ? onEdit.bind(this) : ''}
                    >Edit</MenuItem>
                <MenuItem 
                    // onClick={onDelete ? onDelete.bind(this) : ''}
                    >Delete</MenuItem>
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