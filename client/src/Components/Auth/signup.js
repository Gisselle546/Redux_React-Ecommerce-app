import React, {Component} from 'react';
import {Form, Field} from 'react-final-form';
import styles from './signup.module.css';
import {connect} from 'react-redux';
import * as actions from '../../store/actions';

class Signup extends Component{



  render(){

    const onSubmit = formProps=>{

      this.props.onSubmit(formProps)

    };

    const required = value => (value ? undefined : "Required");
    const email = value=>(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)? undefined :'Enter a email address!');
    const composeValidators = (...validators) => value =>
      validators.reduce((error, validator) => error || validator(value), undefined);




      const {handleSubmit} = this.props;

    return(
        <div className={styles.signup}>
        <Form onSubmit={onSubmit}  render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.emapass}>
                    <div className={styles.username}>
                        <Field name="username" validate={required}>
                        {({ input, meta }) => (
                          <div>
                            <label>Username: </label>

                            <input {...input} type="text" />{meta.error && meta.touched && <span className={styles.error}>{meta.error}</span>}
                          </div>
                        )}
                          </Field>
                      </div>

                  <div className={styles.email}>
                      <Field name="email" validate={composeValidators(required, email)}>
                      {({ input, meta }) => (
                        <div>
                          <label>Email: </label>
                          <input {...input} type="text" />{meta.error && meta.touched && <span className={styles.error}>{meta.error}</span>}
                        </div>
                      )}
                        </Field>



                    </div>
                 <div className={styles.password}>

                      <Field name="password" validate={required}>
                      {({ input, meta }) => (
                        <div>
                            <label>Password: </label>
                          <input {...input} type="password"/>{meta.error && meta.touched && <span className={styles.error}>{meta.error}</span>}
                        </div>
                      )}
                        </Field>
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
    onSubmit: (formProps) => dispatch(actions.postDATA(formProps,ownProps)),

  }
}



export default connect(null,mapDispatchToProps)(Signup);
