import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home'
import Visor from './components/Visor/Visor';
import Story from './components/Story/Story';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Checkout from './components/Cart/Checkout'
import Nav from './components/Nav/Nav'
import Products from './components/Visor/Products';
import Register from './components/Login/Register';

export default (
    <div> 
        <Nav />
        <Switch>
            <Route exact path="/" component={Home} /> 
            <Route path="/visor" component={Visor} /> 
            <Route path="/story" component={Story} /> 
            <Route path="/contact" component={Contact} /> 
            <Route path="/account" component={Login} /> 
            <Route path='/checkout' component={Checkout} /> 
            <Route path='/product/:id' component={Products} />
            <Route path='/register' component={Register} />
        </Switch>
    </div>
)