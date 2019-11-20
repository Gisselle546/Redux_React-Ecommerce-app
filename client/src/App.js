import React from 'react';
import { Route ,Switch} from 'react-router-dom';
import Layout from './Components/HOC/Layout/Layout';
import Products from './Components/Products/Products';
import Homepage from './Components/Homepage/Homepage';
import ProductShow from './Components/Products/ProductShow';
import Signup from './Components/Auth/signup';
import Signin from './Components/Auth/signin';
import Cart from './Components/Cart/cart';

function App() {
  return (
    <div >
      <Layout>
          <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/games/:id" component={ProductShow}/>
        <Route path="/games" component={Products}/>

        <Route path="/signup" component={Signup}/>
        <Route path="/login" component={Signin}/>
        <Route path='/cart' component={Cart}/>
          </Switch>
      </Layout>
    </div>
  );
}

export default App;
