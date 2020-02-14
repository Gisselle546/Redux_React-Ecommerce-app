import React,{Component} from 'react';
import CartItems from './CartItems';
import StripeCheckout from "react-stripe-checkout";
import {connect} from 'react-redux';
import * as actions from  '../../store/actions';
import styles from './cart.module.css';
import Checkout from './checkout';
import _ from 'lodash';

class Cart extends Component{




componentDidMount(){
  this.props.onGetCart()

}

componentDidUpdate(prevProps) {
  if (!_.isEqual( this.props.cart , prevProps.cart )) {
    this.props.onGetCart()
  }
}


renderhost=()=>{
    const {cart}=this.props;

    const cartItem = cart.cart.map((cartitem,i)=>{
      return <CartItems key={cartitem._id} cart={cartitem} clicked={()=>this.props.onDeleteItem(cartitem._id)}/>;
  });

return cartItem;
}


getPrice=()=>{
  var total = 0;
  this.props.cart.cart.map(item=>{
    total += item.items.price
  });
  return total
}



  render(){
    if(!this.props.cart){
      return <div>Loading!!</div>
    }




    return(
        <div className={styles.shopping_Cart}>
            <div className={styles.cartItems}>
                  <h3 className={styles.cart_title}>Shopping Cart</h3>

                      {this.renderhost()}



            </div>


            <div className={styles.checkout}>
              <p className={styles.title}>Summary</p>

              <p className={styles.total}>total  ${this.getPrice()}</p>
              <Checkout classname={styles.button}amount={this.getPrice()}/>

            </div>

{console.log(this.props.cart)}

        </div>
    )
  }
}

const mapStateToProps = state =>{
  return{
   cart: state.cart.cart.cart
  }
}



const mapDispatchToProps = dispatch =>{
  return{
    onGetCart: ()=> dispatch(actions.getCartItems()),
    onDeleteItem:(id)=> dispatch(actions.fetchitemfordeletion(id))

  };
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart);
