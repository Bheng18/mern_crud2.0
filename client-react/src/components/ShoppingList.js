import React, { Component } from 'react';
// import { Container, ListGroup, ListGroupItem, Button, Table } from 'reactstrap';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
//import uuid from 'uuid';
import { connect } from 'react-redux';
import { getItems, deleteItem, editItem, selectedItem } from '../actions/itemAction';
import { PropTypes } from 'prop-types';
import { Paths } from '../enums';
import ListRow from './ListRow';
import ItemModal from './itemModal';
// import ListDetails from './ListDetails';
// import ListRowHeader from './ListRowHeader';

// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import styled from 'styled-components';

// const Div = styled.div`
//    color: blue;
// `

class ShoppingList extends Component{
    componentDidMount(){
        this.props.getItems();
        // console.log(this.props.item)
    }
    
    onEditClick = (item) => {
       this.props.selectedItem(item);
       this.props.history.push(Paths.EDIT_ITEM);
    }

    onSelectItem = (item) => {
      this.props.selectedItem(item);
      this.props.history.push(Paths.ITEM_DETAILS);
      console.log('Items:', item)
    }

    onDeleteClick = (id) => {
       this.props.deleteItem(id);
    }
     
    render(){
        const { items } = this.props.items;
        // console.log(items)
        return(
           <div >
             {/* <Contaciner> */}
              {/* <ListRowHeader /> */}
              <ItemModal />
              <div>
                {
                  // items ?
                  // items.length > 0 ?
                    items.map((item, index) => {
                      return (
                        // <div key={index} onClick={() => this.onSelectItem(item)} > //its working
                          <ListRow
                            // onClick={() => this.onSelectItem(item)}
                            key={index}
                            index={index}
                            item={item}
                            onEdit={() => this.onEditClick(item)}
                            onDelete={() => this.onDeleteClick(item._id)}
                          />
                        // </div>
                      )
                    })
                    // : console.log('no data')
                    // : <ListLoading message={"No transactions found."} />
                  // : <ListLoading />
                }
              </div>
           </div>
        );

    }

}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    items: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
   items: state.item
});


export default connect(mapStateToProps, { getItems, deleteItem, selectedItem })(ShoppingList);