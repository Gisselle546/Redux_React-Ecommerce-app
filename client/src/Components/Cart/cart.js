import React,{Component} from 'react';
import CartItems from './CartItems';
import StripeCheckout from "react-stripe-checkout";
import {connect} from 'react-redux';
import * as actions from  '../../store/actions';
import styles from './cart.module.css';

class Cart extends Component{

  
componentDidMount(){
  this.props.onGetCart()
}

renderhost=()=>{
    const {cart}=this.props;
    const cartItem = cart.cart.map((cartitem)=>{
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
            <h3 className={styles.cart_title}>Shopping Cart</h3>

                {this.renderhost()}


            <div className={styles.checkout}>
              <h2>Total:${this.getPrice()}</h2>
              <button>CheckOut</button>

            </div>



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
