import React, { Component } from 'react';
import {
    Button, 
    Modal, 
    ModalHeader,
    ModalBody, 
    ModalFooter,
    Form, 
    FormGroup, 
    Label, 
    Input, 
    FormText
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemAction';
//import uuid from 'uuid';

class ItemModal extends Component{
    state = {
        modal: false,
        name: '',
        contact: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChangeName = (e) => {
      //  this.setState({ [e.target.name]: e.target.value }); //first encounter problem this code
        this.setState({ name: e.target.value });
    }

    onChangeContact = (e) => {
        this.setState({contact: e.target.value });
    }

    onSubmit = (e) => {
       e.preventDefault();
       const newItem = {
          // id: uuid(),
           name: this.state.name,
           contact: this.state.contact
       }
     //add item via add item
       this.props.addItem(newItem);

     //close modal
     this.toggle();

    }

    render(){
        return(
           <div>
               <Button color="dark" style={{marginBottom: '2rem'}} onClick={this.toggle}>Add Item</Button>
               
               <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Shopping Item</ModalHeader>
                <ModalBody>
                      <Form onSubmit={this.onSubmit}>
                           <FormGroup>
                               <Label for="ïtem">Item</Label>
                               <Input 
                                  type="text"
                                  name="name"
                                  id="ïtem"
                                  placeholder="Add Shopping Item here"
                                  onChange={this.onChangeName}
                               />
                               <Input 
                                  type="text"
                                  name="contact"
                                  id="contact"
                                  placeholder="Add contact Item here"
                                  onChange={this.onChangeContact}
                               />
                               <Button
                                   color="dark"
                                   style={{marginTop: '2rem'}} block
                               >Submit</Button>
                               <Button color="warning" onClick={this.toggle} block >Cancel</Button>
                           </FormGroup>
                      </Form>
                </ModalBody>
                { /*<ModalFooter>
                    <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter> */ }
                </Modal>

           </div>
        );
    }

}//end of class

const mapStateToProps = state => ({
   item: state.item
});

export default connect(mapStateToProps, { addItem })(ItemModal); 