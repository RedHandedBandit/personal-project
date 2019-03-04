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
    width: 350,
  },
  fullList: {
    width: 'auto',
  },
};
const visorPhoto = {
  width: 100,
  height: 'auto',
  border: 'Solid',
};

const mapped_divForSwipable = {
  border: 'solid',
  display: 'flex',
  height: 120,
  justifyContent: 'space-around',
  alignItems: 'center',
}

const productName_Quantity = {
  border: 'dotted',
  margin: 2,
  fontSize: 20,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  width: 120,
}

const productName_swipable = {
  border: 'solid',
  margin: 2,
}

const quantity_swipable ={
  border: 'solid',
  margin: 2,
  display: 'flex',
  justifyContent: 'space-between',
}

const productPrice_swipable = {
  border: 'solid',
  margin: 2,
  fontSize: 17,
  fontWeight: 400,
}

const totalPrice_checkoutBtn = {
  border: 'solid',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  marginTop: 50,
  fontSize: 20,
}

const sizeOfWholeCart = {
  hideThisOnBigScreens: {
    '@media screen and (min-width: 375px)':{
      width: '75%'
    }
  }
}

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
        <div style={mapped_divForSwipable} key={item.product_id}> 

          <img style={visorPhoto} alt="cart_img" src={item.product_pic} /> 

          <div style={productName_Quantity}>

            <div style={productName_swipable}> {item.product_name} </div>
            <div style={quantity_swipable}> 
              <button onClick={() => this.props.updateQuantity('down', item.product_id)} > - </button>
              {item.quantity}
              <button onClick={() => this.props.updateQuantity('up', item.product_id)} > + </button>
            </div> 
          </div>
          <div style={productPrice_swipable} > ${item.product_price * item.quantity}.00 </div>
          <button className="remove_btn_cart" 
              onClick={() => this.props.removeProduct(item.product_id)} > 
              x 
          </button>
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
      <div style={sizeOfWholeCart}>
        
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
          <div style={totalPrice_checkoutBtn}> 
            <p> Total </p>${totalPrice}.00
            <Link to="/checkout"> {sideList} </Link>
          </div>

              
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