import React,{Component} from 'react';
import { withRouter } from "react-router-dom";
import styles from './landingpage.module.css';



class Landingpage extends Component{



  renderhost=()=>{
      if(localStorage.getItem('token')==null){
        return <button onClick={()=>this.props.history.push('/signup')}>Sign up to play today</button>
      }
        return <button onClick={()=>this.props.history.push('/games')}>Continue your game</button>
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

export default withRouter(Landingpage);
