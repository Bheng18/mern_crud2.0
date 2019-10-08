import React, { useState } from 'react';
// import { colors } from 'material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    taas: {
       height: 100
    },
    displayStyle: {
        display: 'flex', 
        justifyContent: 'space-between',
        // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
    titleMarginStyle: {
      margin: 15
    },
    titleStyle: {
       fontSize: 32, 
       color: theme.palette.text.secondary, 
       cursor: 'default'
    },
    subTitleStyle: {
      fontSize: 20, 
      color: theme.palette.text.secondary, 
      cursor: 'default'
    },
    mainBtnMargin: {
        margin: 15, 
        display: 'flex'
    },
    btnMargin: {
        marginLeft: 8 
    }

}));


function TitleBar(props) {
    const classes = useStyles();
    //  const [state, setState] = useState({
    //     title: '',
	// 	subTitle: '',
	// 	buttons: null 
    //  });
		return (
			<div className={classes.taas}>
				<div className={ classes.displayStyle }>
					<div className={classes.titleMarginStyle}>
						<div className={classes.titleStyle}>
							{props.title}
						</div>
						{/* <div className={classes.subTitleStyle}>
							{props.subTitle}
						</div> */}
					</div>
					<div className={classes.mainBtnMargin} >
						{
							props.buttons ?
								props.buttons.map((button, index) => {
									return (
										<div key={index} className={classes.btnMargin}>
											{button}
										</div>
									)
								})
								: null
						}
					</div>
				</div>
			</div>
		)
	}


TitleBar.propTypes = {
	title: PropTypes.string,
	subTitle: PropTypes.string,
	buttons: PropTypes.arrayOf(PropTypes.element)
}

export default TitleBar;