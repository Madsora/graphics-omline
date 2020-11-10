import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import SignIn from './components/SignIn/SignIn'

function App() {
  return (
    <div className="App">
      <header className="App-header">
                {/* <Route path='/dashboard' component={Dashboard} /> */}
                <Route path='/login' component={SignIn}/>
                {/* <SignIn /> */}
      </header>
    </div>
  );
}

export default App;
