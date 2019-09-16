import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ msg }) => {
    return(
      <div>
         <h4>{msg}</h4>
      </div>
    );

Message.propTypes = {
    msg: PropTypes.string.isRequired
}

}

export default Message;