import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems, deleteItem, editItem, selectedItem } from '../actions/itemAction';
import { PropTypes } from 'prop-types';
import { Paths } from '../enums';
import ListRow from './ListRow';
import ItemModal from './itemModal';
import TitleBar from '../common/TitleBar';
import ListLoading from '../common/ListLoading';
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

    onDeleteClick = (item) => {
      //  this.props.deleteItem(item);
      this.props.selectedItem(item);
      this.props.history.push(Paths.ITEM_CONFIRM);
    }
     
    render(){
        const { items } = this.props.items;
        // console.log(items)
        return(
           <div >
              <TitleBar 
                title={'List of Employee'}
                // subTitle={'subTitle'}
                buttons={[<ItemModal />]}
              />
                  {/* <ItemModal />  */}
              <div>
                {
                  items ?
                  items.length > 0 ?
                    items.map((item, index) => {
                      return (
                        // <div key={index} onClick={() => this.onSelectItem(item)} > 
                          <ListRow
                            // onClick={() => this.onSelectItem(item)}
                            key={index}
                            index={index}
                            item={item}
                            onEdit={() => this.onEditClick(item)}
                            onDelete={() => this.onDeleteClick(item)}
                            onViewDetails={() => this.onSelectItem(item)}
                          />
                        // </div>
                      )
                    })
                    : <ListLoading message={"No transactions found."} />
                  : <ListLoading />
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