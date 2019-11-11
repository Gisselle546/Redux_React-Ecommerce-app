import React from 'react';
import { Route } from 'react-router-dom';
import Layout from './Components/HOC/Layout/Layout';
import Products from './Components/Products/Products';
import Homepage from './Components/Homepage/Homepage';
import Signup from './Components/Auth/signup';
import Signin from './Components/Auth/signin';

function App() {
  return (
    <div >
      <Layout>
        <Route exact path="/" component={Homepage} />
        <Route path="/games" component={Products}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/login" component={Signin}/>
      </Layout>
    </div>
  );
}

export default App;
