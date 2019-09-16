import React from 'react';
import PropTypes from 'prop-types';
// import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { amber, green } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    background: green[600], //'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 38,
    // padding: '0 30px',
  },
});

const Message = ({ msg }) => {

  const classes = useStyles();

  return(
      <div className={classes.root}>
          <Grid container direction="row" justify="center" alignItems="center" >{msg}</Grid>
      </div>
    );
}

Message.propTypes = {
  msg: PropTypes.string.isRequired
}

export default Message;