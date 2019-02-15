import React, {Component} from 'react';
import './Cart.css'

class Cart extends Component {
    

    // handleButton(){
    //     this.setprops({ hidden: !this.props.hidden })
    // }

    render(){
        
        return(
            <div>
                <div> 
                    <div> Cart </div> 

                    <div> image tag here </div>

                    <div>
                         <p> Product_name </p> 
                            <div>
                                <p> Product_price </p> 
                            </div>

                         <input />

                    </div>
                    <div> 
                        <p> SUBTOTAL </p>
                        <p> total price </p>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Cart



// const cartClass = this.props.hidden ?
// "cart_hidden" : 
// "cart_drawer"

// const gray = this.props.hidden ?
// "gray_hidden" :
// "main_gray"

{/* <div className={gray}> 
<div className={cartClass}>  */}

{/* <button onClick={() => this.props.setHidden(!this.props.hidden)} > 
x 
</button> */}


{/* <Link to="/api/checkout" > 
<button> 
Check out
</button>
</Link> */}