import React from 'react';
import HookReducer from '../components/hook-reducer'
import Test from './test'

function Home() {
  return (
    <div className="App">
      <HookReducer initialCount={1}/>
      <Test />
    </div>
  );
}

export default Home;
