import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button, Table } from 'reactstrap';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
//import uuid from 'uuid';
import { connect } from 'react-redux';
import { getItems, deleteItem, editItem, selectedItem } from '../actions/itemAction';
import { PropTypes } from 'prop-types';
import { Paths } from '../enums'

class ShoppingList extends Component{

    componentDidMount(){
        this.props.getItems();
    }
    
    onEditClick = (item) => {
       this.props.selectedItem(item);
       this.props.history.push(Paths.EDIT_ITEM);
    }

    onDeleteClick = (id) => {
       this.props.deleteItem(id);
    }
     
    render(){
        const { items } = this.props.item;
        return(
           <Container >
           
<Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {items.map((item, index) => (
          <tr key={index} timeout={500} >
          
            <th scope="row">{index}</th>
            <td>{item.name}</td>
            <td>{item.contact}</td>
            <td><Button className="edit-btn float-right" color="primary" size="sm" 
                              onClick={this.onEditClick.bind(this, item)}>Edit</Button>
                <Button className="remove-btn float-right" color="danger" size="sm" 
                              onClick={this.onDeleteClick.bind(this, item._id)}>Delete</Button></td>
          
            </tr>
              ))}
        </tbody>
      </Table>
           </Container>
        );

    }

}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
   item: state.item
});


export default connect(mapStateToProps, { getItems, deleteItem, selectedItem })(ShoppingList);