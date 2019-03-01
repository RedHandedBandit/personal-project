import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import './CheckoutForm.css'

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {complete: false};
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    let {token} = await this.props.stripe.createToken({name: "Name"});
  let response = await fetch("/charge", {
    method: "POST",
    headers: {"Content-Type": "text/plain"},
    body: token.id
  });

  if (response.ok) this.setState({complete: true});
  }

  render() {
    if (this.state.complete) return <h1 className="purchase_complete">Purchase Complete</h1>;
    return (
      <div className="checkout">
        <p className="question_purch">Would you like to complete your purchase?</p>
        <CardElement className="infoForCard" />
        <p className="pTag_btnPurchase"> 
          <button className="sendPurchase_btn" onClick={this.submit}>Purchase</button>
        </p>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);