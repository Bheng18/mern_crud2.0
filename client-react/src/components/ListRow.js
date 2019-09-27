import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import DetailsIcon from '@material-ui/icons/Details';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
//import EmployeeImages from './EmployeeImages';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import ConfirmDelete from './ConfirmDelete';

// import { NavigationMoreVert, EditorModeEdit, ContentRemove } from 'material-ui/icons';
// import { Divider } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    // "&:hover": {
    //    cursor: 'pointer',
    // }
  },
  paper: {
    padding: theme.spacing(2),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  card: {
    maxWidth: 80,
  },
  media: {
    height: 80,
  },
  // list: {
  //   width: '100%',
  //   maxWidth: 360,
  //   backgroundColor: theme.palette.background.paper,
  // },
}));

 const ListRow = (props) => {
  // console.log('ListRow Props', props)
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }
  
  return (
    // onClick={props.onClick.bind(props)}
    <div className={classes.root} >
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Grid container direction="row" justify="flex-end" spacing={1}>

            <Grid item xs={12} sm={3}>
            <Typography variant="caption" display="block">
                Image:
            </Typography>
              { props.item && props.item.image ?
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={`/uploads/${props.item.image}`}
                      title={props.item ? props.item.name : ''}
                    />
                  </CardActionArea>
                </Card> 
                : <Card className={classes.card}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={`/uploads/defaultAvatar.png`}
                        title="Default Avatar"
                      />
                    </CardActionArea>
                  </Card>
              }          
               
            </Grid>

            <Grid item xs={12} sm={3}>
            {/* <Divider /> */}
            <Typography variant="caption" display="block">
                name:
            </Typography>
            <Typography variant="button" gutterBottom>
              <b>{props.item ? props.item.name : ''}</b>               
            </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
            {/* <Divider /> */}
              <Typography variant="caption" display="block">
                  contact:
              </Typography>
              <b>{props.item ? '(+' + props.item.contact.replace(/(\d{2})(\d{3})(\d{3})/, '$1) $2-$3-') : ''}</b>
            </Grid>
            <Grid item container direction="row" justify="flex-end" alignItems="flex-start" xs={12} sm={3} >
              <IconButton
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                 <MoreVertIcon/>
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {/* <MenuItem onClick={this.onEditClick.bind(this, item)}>Edit</MenuItem> */}
                <MenuItem onClick={props.onEdit ? props.onEdit.bind(this) : ''}><EditIcon color="primary"/> Edit</MenuItem>
                <MenuItem onClick={props.onViewDetails ? props.onViewDetails.bind(this) : ''}><DetailsIcon color="primary"/> Details</MenuItem>
                <MenuItem onClick={props.onDelete ? props.onDelete.bind(this) : ''}><DeleteIcon color="primary"/>Delete</MenuItem>
              </Menu>
            </Grid>

          </Grid>

        </Paper> 

        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid> */}


      </Grid>
    </div>
  );
}
export default ListRow;