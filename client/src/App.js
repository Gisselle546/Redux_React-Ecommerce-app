import React from 'react';

import Layout from './Components/HOC/Layout/Layout';
import Homepage from './Components/Homepage/Homepage';

function App() {
  return (
    <div >
      <Layout>
        <Homepage/>
      </Layout>
    </div>
  );
}

export default App;
