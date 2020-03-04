import React,{Component} from 'react'
import {connect} from 'react-redux';
import * as actions from  '../../store/actions';
import styles from './ProductShow.module.css'



class ProductShow extends Component{
  componentDidMount(){
      const {id} = this.props.match.params;
        this.props.onInitproduct(id);

    }



    fifa=()=>{
          const{product} = this.props;

      this.props.onSendCart(product);
      this.props.history.push('/cart')
    }

  render(){
    if(!this.props.product){
     return <div>Loading!!!</div>;
   }


    return(
    <div>
      <div className={styles.container}>
          <div className={styles.imagecontainer}>
            <img src={this.props.product.image}/>
          </div>
          <div className = {styles.productContainer}>
            <h2>{this.props.product.title}</h2>
            <h3> ${this.props.product.price}</h3>
            <button className={styles.button} onClick={this.fifa}> Add to Cart </button>

          </div>
      </div>
      <div className={styles.descriptionContainer}>
        <h2 className={styles.title}>Description</h2>
        <p className={styles.description}>{this.props.product.productdescription}</p>
      </div>
    </div>


    )
  }
}

const mapStateToProps = (state) => {
    return {
        product:state.products.product.id,


    };
}

const mapDispatchToProps = (dispatch) => {
    return {
onInitproduct: (id) => dispatch(actions.fetchproduct(id)),
onSendCart: (id) => dispatch(actions.sendtocart(id))
};
}


export default connect(mapStateToProps,mapDispatchToProps)(ProductShow);
