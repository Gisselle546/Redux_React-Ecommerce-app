import React,{Component} from 'react';

import {connect} from 'react-redux';
import styles from './Toolbar.module.css';
import Logo from './Logo/Logo';
import {withRouter} from 'react-router-dom'
import * as actions from  '../../store/actions'
import NavigationItems from './NavigationItems/NavigationItems';

class toolbar extends Component{

    state={
      search:''
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


      render(){
        return(
    <header className={styles.toolbar}>

      <div className={styles.logo}>
        <Logo/>
      </div>
          <nav>
            <NavigationItems />
          </nav>
          <div className={styles.searchbar}>
            <input onChange={this.changeHandler}type="text" value={this.state.search} onKeyUp={this.handlekeyup} />
            <span></span>
          </div>
          <div><p>sign in</p></div>
        <div className={styles.container}>
          <button>Sign up to play today</button>
        </div>
    </header>

  )
}
}

const mapDispatchToProps = dispatch => {
    return {
onInitSearch: (hi) => dispatch(actions.fetchinput(hi)),
};
}


export default withRouter(connect(null,mapDispatchToProps)(toolbar));
