import React from 'react';
import NavBar from "./NavBar";
import Home from "./Home";
import QuoteForm from "./QuoteForm"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className ="App">
      <NavBar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home /> 
          </Route>
          <Route exact path="/quote">
            <QuoteForm /> 
          </Route>
        </Switch>
        
      </div>
    </div>
    </Router> 
    
    
  );
}




export default App;
