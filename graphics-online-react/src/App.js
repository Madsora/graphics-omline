import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import SignIn from './components/SignIn/SignIn'
import SignUpMain from './components/SignUp/SignUpMain'
import SignUpEmployer from "./components/SignUp/SignUpEmployer"
import SignUpEmployee from "./components/SignUp/SignUpEmployee"
import MainPage from './components/MainPage/MainPage';
import HomePage from './components/HomePage/HomePage';
import GraphicsEmployee from './components/GraphicsEmployee/GraphicsEmployee'
import CreateGraphic from './components/CreateGraphic/CreateGraphic';

function App() {
  return (
    <div className="App">
      <header className="App-header">
                <Switch>
                  <Route path='/login' component={SignIn}/>
                  <Route path='/sign-up/employer' component={SignUpEmployer}/>
                  <Route path='/sign-up/employee' component={SignUpEmployee}/>
                  <Route path='/sign-up' component={SignUpMain}/>
                  <Route path='/profile' component={HomePage}/>
                  <Route path='/graphics-employee' component={GraphicsEmployee}/>
                  <Route path='/create-graphic' component={CreateGraphic}/>
                  <Route path='/' component={MainPage}/>
                </Switch>
      </header>
    </div>
  );
}

export default App;
