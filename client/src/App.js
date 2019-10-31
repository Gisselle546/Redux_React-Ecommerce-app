import React from 'react';
import { Route } from 'react-router-dom';
import Layout from './Components/HOC/Layout/Layout';
import Products from './Components/Products/Products';
import Homepage from './Components/Homepage/Homepage';

function App() {
  return (
    <div >
      <Layout>
        <Route exact path="/" component={Homepage} />
        <Route path="/games" component={Products}/>
      </Layout>
    </div>
  );
}

export default App;
