import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {connect} from 'react-redux';
import styles from './Toolbar.module.css';
import Logo from './Logo/Logo';
import {withRouter} from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import * as actions from  '../../store/actions'
import NavigationItems from './NavigationItems/NavigationItems';

class toolbar extends Component{

state={
  show:false
}


    changeHandler=(e)=>{
 this.setState({search:e.target.value});
}




handlekeyup=(e)=>{


   if (e.key === 'Enter' && this.state.search !== '') {
       this.props.onInitSearch(this.state.search)
       this.props.history.push(`api/game/search?results=${this.state.search}`)
        this.setState({search:''});
     }
 }

signedin=()=>{
  if (!this.props.auth){
    return[
      console.log(this.props.auth),
    <li className={ styles.navitema}> <NavLink to="/signup" >Sign Up</NavLink></li>,
    <li className={ styles.navitema}> <NavLink to="/login">Log In</NavLink></li>,
    <li className={ styles.navitemab}> <NavLink to="/cart" ><FontAwesomeIcon icon={faShoppingCart}/></NavLink></li>
    ];
  }else{
    return[

  <li className={ styles.navitema}> <NavLink to="/" onClick={()=>this.props.signout()}> Sign Out </NavLink></li>,
  <li className={ styles.navitemab}> <NavLink to="/cart" ><FontAwesomeIcon icon={faShoppingCart}/></NavLink></li>,

    ];

  }
}


      render(){

        return(
    <header className={styles.toolbar} >
      <Logo/>
      <nav className={styles.navitem}>
        <NavigationItems/>
      </nav>
      <div>

      </div>
      <div className={styles.search}>
          <input type="text"/>
            <button className={styles.button}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
      </div>
      <div className={styles.rightcontainer}>

        <ul className={ styles.navitems}>
          {this.signedin()}


        </ul>
      </div>
    </header>

  )
}
}

const mapStateToProps=state=>{
  return {
    auth:state.auth.authenticated
  }
}

const mapDispatchToProps = dispatch => {
    return {
   onInitSearch: (hi) => dispatch(actions.fetchinput(hi)),
   signout: ()=>dispatch(actions.signout()),


};
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(toolbar));
