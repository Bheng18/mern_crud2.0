import React, { Component } from 'react';
import {
    Button, 
    Modal, 
    ModalHeader,
    ModalBody, 
    // ModalFooter,
    Form, 
    FormGroup, 
    Label, 
    Input, 
    // FormText
} from 'reactstrap';
import { connect } from 'react-redux';
import { selectedItem, editItem } from '../actions/itemAction';
import { Paths } from '../enums'
// import { Divider } from '@material-ui/core';
//import uuid from 'uuid';

class EditItem extends Component{
    state = {
        modal: true,
        _id: this.props.item._id,
        name: this.props.item.name,
        contact: this.props.item.contact
    }

    componentDidMount(){
        console.log('comDidMount',this.props.item);
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onCancel = () => {
       this.toggle(); //close modal
       this.props.history.push(Paths.ITEMS);
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log('name: ', this.state.name)
    }

    onSubmit = (e) => {
       e.preventDefault();
       const newItem = {
           _id: this.state._id,
           name: this.state.name, // = this.setState({ [e.target.name]: e.target.value })
           contact: this.state.contact
        }
      this.props.editItem(newItem); //execute edit item
    //   this.props.history.push('/'); same as below, also working
      this.props.history.push(Paths.ITEMS);
      this.toggle(); //close modal
    }

    render(){
        // const items = this.state.item;
    // console.log('item', this.props);
        return(
           <div>
               {/* <Button color="dark" style={{marginBottom: '2rem'}} onClick={this.toggle}>Edit Item</Button> */}
               
               <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Employee List</ModalHeader>
                <ModalBody>
                      <Form onSubmit={this.onSubmit}>
                           <FormGroup>
                               <Label for="ïtem">Full Name</Label>
                               <Input type="text" name="name" value={this.state.name} id="ïtem" onChange={this.onChange} />
                               {/* <Divider /> */}
                                <br />
                               <Input type="text" name="contact" value={this.state.contact} id="ïtem" onChange={this.onChange} />
                               <Button color="dark" style={{marginTop: '2rem'}} block >Submit</Button>
                               <Button color="warning" onClick={this.onCancel} block >Cancel</Button>
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
   item: state.item.selectedItem
});

export default connect(mapStateToProps, { selectedItem, editItem })(EditItem); 