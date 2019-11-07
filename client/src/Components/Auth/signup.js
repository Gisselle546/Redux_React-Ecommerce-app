import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import {Form, Field} from 'react-final-form';
import styles from './signup.module.css';
import {connect} from 'react-redux';
import * as actions from '../../store/actions';

class Signup extends Component{

  render(){

    const onSubmit = formProps=>{

      this.props.onSubmit(formProps)




    };

      const {handleSubmit} = this.props;
    return(
        <div className={styles.signup}>
        <Form onSubmit={onSubmit}  render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.emapass}>
                    <div className={styles.username}>
                        <label>Username: </label>
                        <Field name="username" type="text" component="input" />
                      </div>
                  <div className={styles.email}>
                      <label>Email: </label>
                      <Field name="email" type="text" component="input" />
                    </div>
                 <div className={styles.password}>
                      <label>Password: </label>
                      <Field name="password" type="password" component="input"/>
                  </div>
        </div>
          <button className={styles.button}>Sign Up</button>
        </form>
    )}
   />
  </div>
);
  }
}

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    onSubmit: (formProps) => dispatch(actions.postDATA(formProps,ownProps))
  }
}
export default connect(null,mapDispatchToProps)(Signup);
