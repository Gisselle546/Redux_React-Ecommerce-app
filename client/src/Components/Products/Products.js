import React,{Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import Spinner from '../../UI/spinner';
import * as actions from  '../../store/actions';
import Product from './Product';
import styles from './Products.module.css';

class Products extends Component{

state={
  sortedArray:[],
  showMenu:false
}

  componentDidMount(){
    this.props.onInitProducts()

  }

  showMenu=(event)=>{
    event.preventDefault();
    this.setState({
      showMenu:true
    }, () => {
      document.addEventListener('click', this.closeMenu)
    })
  }

closeMenu=()=>{
  this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
}


  sortByPriceAsc=()=> {

          this.props.products.products.Product.sort((a, b) => (a.price - b.price))
          this.setState({sortedArray:this.props.products});
      }

      sortByPriceDesc=() =>{

          this.props.products.products.Product.sort((a, b) => (b.price - a.price))
          this.setState({sortedArray:this.props.products});
      }


  renderhost=()=>{

    const products = _.mapKeys(this.props.products.products.Product,'_id');

        return _.map(products, post=>{
             return <Product key={post._id} game={post}  />
          })

  }

  render(){


      if(this.props.products.loading){
        return <Spinner />;
      }


    if( localStorage.getItem('token')===null){
      this.props.history.push('/login');
    }



    return(

      <div className={styles.productContainer}>
            <div className={styles.categoryContainer}>
            <button className={styles.sortbybutton}onClick={this.showMenu}>
              Sort by
            </button>
            {
              this.state.showMenu
                ? (
              <div className={styles.menu}  ref={(element) => {
                        this.dropdownMenu = element;
                      }}>
                  <button onClick={this.sortByPriceAsc}>Up</button>
                  <button onClick={this.sortByPriceDesc}>Down</button>
              </div>
            )
                : (
                  null
                )
            }
            </div>
        <div className={styles.container}>
        {this.renderhost()}
        </div>
      </div>

    )
  }
}

const mapStateToProps = state =>{
  return{
    products: state.products



  }
}


const mapDispatchToProps = dispatch =>{
  return{
    onInitProducts: ()=> dispatch(actions.fetchproducts()),

  };
}


export default connect(mapStateToProps,mapDispatchToProps)(Products);
