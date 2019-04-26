import React, { Component } from 'react';

import {HashRouter as Router,Route,Switch}  from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from './components/Contacts/Contacts';
import AddContact from './components/Contacts/AddContact';
import EditContact from './components/Contacts/EditContact';
import Header from './components/Layout/Header'; 
import About from './components/Pages/about'; 
import './App.css';
import { Provider } from './context';
import NotFound from './components/Pages/NotFound'
import Test from './components/Test/Test'


class App extends Component {
  render() {
    return (  

      <Provider>
       <Router>
      <div className="App">
       
        <Header  branding="Contact Manager"/>
        <div className="container">
        
     <Switch>

       <Route exact path="/about" component={About}></Route>   

       <Route exact path="/contact/add" component={AddContact}></Route>
       <Route exact path="/contact/edit/:id" component={EditContact}></Route>
       <Route exact path='/' component={Contacts}  ></Route>
       <Route exact path="/test" component={Test}></Route>
       <Route component={NotFound}></Route>
       
     </Switch>

        </div>

       
        

      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
