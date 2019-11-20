import React,{Component} from 'react';
import CartItems from './CartItems';
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




  render(){
    if(!this.props.cart){
      return <div>Loading!!</div>
    }

    return(
        <div className={styles.shopping_Cart}>
            <h3 className={styles.cart_title}>Shopping Cart</h3>

            {this.renderhost()}

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
