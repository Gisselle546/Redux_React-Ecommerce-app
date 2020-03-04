import React, {Component} from 'react';
import _ from 'lodash';
import Product from '../Products/Product'
import Spinner from '../../UI/spinner';
import {connect} from 'react-redux';
import styles from './Search.module.css';



class Search extends Component{


renderhost=()=>{

const {Search} = this.props.search.search

    return _.map(Search,post=>{

      return <Product key ={post._id} game={post}/>
    });



}


  render(){


if(this.props.search.loading){
  return <Spinner/>
}




    return(
        <div className={styles.container}>

          {this.renderhost()}
        </div>

    )
  }
}

const mapStateToProps = state =>{
  return{
    search:state.search,

  }
}




export default connect(mapStateToProps,null)(Search);
