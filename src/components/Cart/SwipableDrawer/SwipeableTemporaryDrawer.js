import React from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Cart from '@material-ui/icons/LocalGroceryStoreOutlined'
import { connect } from 'react-redux';
import {updateQuantity, removeProduct} from './../../../ducks/reducer'
import './SwipeableTemporaryDrawer'
// import Quantity from '../Quantity/Quantity';

const styles = {
  list: {
    width: 400,
  },
  fullList: {
    width: 'auto',
  },
};

class SwipeableTemporaryDrawer extends React.Component {
  // constructor(props){
  //   super(props)
    state = {
      right: false,
      // quantity: 1
    };
    // this.updateQuantity = this.updateQuantity.bind(this)
  // }
  

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  removeFromCart = (item) => {
    
  }

  // updateTheQuantity(direction){
  //   if(direction === 'down' && this.state.quantity - 1 === 0){
  //     return;
  //   }
  //   if(direction === 'up'){
  //     this.setState({quantity: this.state.quantity + 1})
  //   } else {
  //     this.setState({quantity: this.state.quantity - 1})
  //   }
  // }

  render() {
    let newCart = this.props.cart.map(item => {
      return (
        <div key={item.product_id}> 
          <button onClick={() => this.props.removeProduct(item.product_id)} > x </button>
          <img alt="cart_img" src={item.product_pic} /> 
          <div> {item.product_name} </div>
          <div> ${item.product_price * item.quantity}.00 </div>
          <div> 
            <button onClick={() => this.props.updateQuantity('down', item.product_id)} > - </button>
            {item.quantity}
            <button onClick={() => this.props.updateQuantity('up', item.product_id)} > + </button>
          </div> 
        </div>
      )
    })

    const { classes } = this.props;
    const sideList = (
      <div className={classes.list}>

        <Divider />
        <List>
          {['Check out'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    let totalPrice = this.props.cart.reduce((acc, item)=> {
      if(item.product_price === 0){
          return 'your cart is empty'
      }else {return acc + (item.product_price * item.quantity)}
      }, 0)

// -------------------> Returning Everything <---------------------------------------
    return (
      <div>
        
        <SwipeableDrawer
          anchor="right"
          open={this.state.right}
          onClose={this.toggleDrawer('right', false)}
          onOpen={this.toggleDrawer('right', true)}
        >
          <div
            className="return_allCart"
            tabIndex={0}
            role="button"
            // onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
          >

          {newCart} 
          {/* <Quantity /> */}
          ${totalPrice}.00
            <Link to="/checkout"> {sideList} </Link>
              
          </div>
        </SwipeableDrawer>


        <Button onClick={this.toggleDrawer('right', true)}> <Cart /> </Button>

      </div>
    );
}
}

SwipeableTemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (reduxState) => {
  const {cart, incrementIfCartUpdated} = reduxState 
  return {cart, incrementIfCartUpdated}
}
const dispatchToProps = {
  updateQuantity,
  removeProduct
}

export default withStyles(styles)(connect(mapStateToProps, dispatchToProps)(SwipeableTemporaryDrawer));