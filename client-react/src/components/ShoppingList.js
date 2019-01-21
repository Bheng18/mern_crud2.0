import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button, Table } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
//import uuid from 'uuid';
import { connect } from 'react-redux';
import { getItems, deleteItem, editItem } from '../actions/itemAction';
import { PropTypes } from 'prop-types';

class ShoppingList extends Component{

    componentDidMount(){
        this.props.getItems();
    }
    
    onEditClick = (id) => {
        this.props.editItem(id);
    }

    onDeleteClick = (id) => {
       this.props.deleteItem(id);
    }
     
    render(){
        const { items } = this.props.item;
        return(
           <Container >
            {/*<ListGroup>
                <ListGroupItem>Name ---------------- Contact</ListGroupItem>
            </ListGroup>
            <ListGroup>
                <TransitionGroup className="Shopping-list">
                    {items.map(({_id, name, contact}) => (
                       <CSSTransition key={_id} timeout={500} classNames="fade">
                          <ListGroupItem>
                            {name} {" ---------- "} {contact}
                            <Button className="edit-btn float-right" color="primary" size="sm" 
                              onClick={this.onEditClick.bind(this, _id)}>Edit</Button>
{/*
<Button className="edit-btn" data-toggle="modal" data-target="#exampleModal"
              onClick={() => this.replaceModalItem(index)}>edit</Button>

                            <Button className="remove-btn float-right" color="danger" size="sm" 
                              onClick={this.onDeleteClick.bind(this, _id)}>Delete</Button>
                          </ListGroupItem>
                       </CSSTransition>
                    ))}
                </TransitionGroup>
            </ListGroup> */}
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
        {items.map(({ _id, name, contact}) => (
          <tr key={_id} timeout={500} >
          
            <th scope="row">{_id}</th>
            <td>{name}</td>
            <td>{contact}</td>
            <td><Button className="edit-btn float-right" color="primary" size="sm" 
                              onClick={this.onEditClick.bind(this, _id)}>Edit</Button>
                <Button className="remove-btn float-right" color="danger" size="sm" 
                              onClick={this.onDeleteClick.bind(this, _id)}>Delete</Button></td>
          
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

export default connect(mapStateToProps, { getItems, deleteItem, editItem })(ShoppingList);