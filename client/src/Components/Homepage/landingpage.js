import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import styles from './landingpage.module.css';



class Landingpage extends Component{

  renderhost=()=>{
      if(localStorage.getItem('token')==null){
        return   <button>Sign up to play today</button>
      }
        return <button>Continue your game</button>
    }

  render(){

    return(

        <div className={styles.landingPage}>
          <div className={styles.buttonlanding}>
            {this.renderhost()}
          </div>
        </div>
      )
  }
}

export default Landingpage;
