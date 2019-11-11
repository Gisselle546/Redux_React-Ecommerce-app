import React, {Component} from 'react';
import {Form, Field} from 'react-final-form';
import styles from './signin.module.css';
import {connect} from 'react-redux';
import * as actions from '../../store/actions';

class Signin extends Component{
  render(){
    const onSubmit = formProps=>{
      this.props.onSubmit(formProps);
    }
    const {handleSubmit}= this.props;
    console.log(this.props)

    return(
        <div className={styles.signin}>
        <Form onSubmit={onSubmit}  render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.emapass}>
                  <div className={styles.email}>
                      <label>Email: </label>
                      <Field name="email" type="text" component="input" />
                    </div>
                 <div className={styles.password}>
                      <label>Password: </label>
                      <Field name="password" type="password" component="input"/>
                  </div>
        </div>
          <button className={styles.button}>Sign in</button>
        </form>
    )}
   />
  </div>
);
  }
}

const mapDispatchToProps =(dispatch,ownProps)=>{
  return{
    onSubmit: (formProps)=> dispatch(actions.signDate(formProps,ownProps))
  }
}




export default connect(null,mapDispatchToProps)(Signin);
