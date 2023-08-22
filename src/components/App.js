import React, {useEffect, useState} from 'react';
import NavBar from "./NavBar";
import Home from "./Home";
import QuoteForm from "./QuoteForm"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme ('dark');
    }else {
      setTheme('light');
    }
  }

  useEffect(() => {
    document.body.className = theme;
  }, [theme])

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
        <button onClick ={toggleTheme}>Dark Mode</button>
      </div>
    </div>
    </Router> 
    
    
  );
}




export default App;
