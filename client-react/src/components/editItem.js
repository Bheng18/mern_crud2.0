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
import { editItem } from '../actions/itemAction';
//import uuid from 'uuid';

class EditItem extends Component{
    state = {
        modal: false,
        name: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
       e.preventDefault();
       const newItem = {
          // id: uuid(),
           name: this.state.name // = this.setState({ [e.target.name]: e.target.value })
       }
     //add item via add item
       this.props.editItem(newItem);

     //close modal
     this.toggle();

    }

    render(){
        return(
           <div>
               <Button color="dark" style={{marginBottom: '2rem'}} onClick={this.toggle}>Edit Item</Button>
               
               <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Shopping Item</ModalHeader>
                <ModalBody>
                      <Form onSubmit={this.onSubmit}>
                           <FormGroup>
                               <Label for="ïtem">Item</Label>
                               <Input type="text" name="name" id="ïtem" onChange={this.onChange} />
                               <Button color="dark" style={{marginTop: '2rem'}} block >Submit</Button>
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

export default connect(mapStateToProps, { editItem })(EditItem); 