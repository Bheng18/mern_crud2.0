import React, { useState } from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
// import { colors } from "material-ui/styles";
const useStyles = makeStyles(theme => ({
	root: {
	  flexGrow: 1,
	},
	mainStyle: {
		position: "relative",
		backgroundColor: "#9e9e9e",
		height: 500,
		// ...this.props.style
	},
	messageDisplay: {
		display: 'flex', 
		justifyContent: 'center', 
		alignItems: 'center', 
		height: '100%'
	},
	messageStyle: {
		fontSize: 16, 
		fontWeight: 400, 
		color: "#fafafa"
	}
}));

function ListLoading(props) {
	const classes = useStyles();
	const [defaultProps, setDefaultProps] = useState({
		message: "Please wait while we load the list..."
	});

		return (
			<div className={classes.mainStyle} >
				<div className={classes.messageDisplay} >
					<div className={classes.messageStyle} >
						{props.message}
					</div>
				</div>
			</div>
		);
}

ListLoading.propTypes = {
	style: PropTypes.object,
	message: PropTypes.string
}

export default ListLoading;
