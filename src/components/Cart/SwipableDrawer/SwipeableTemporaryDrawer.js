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

const styles = {
  list: {
    width: 400,
  },
  fullList: {
    width: 'auto',
  },
};

class SwipeableTemporaryDrawer extends React.Component {
  state = {
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    let newCart = this.props.cart.map(item => {
      return (
        <div key={item.product_id}> 
          <img alt="cart_img" src={item.product_pic} /> 
          <div> {item.product_name} </div>
          <div> {item.product_price} </div>
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
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
          >
          {newCart} 
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
  const {cart} = reduxState 
  return {cart}
}

export default withStyles(styles)(connect(mapStateToProps)(SwipeableTemporaryDrawer));