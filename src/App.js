import React from 'react'
import './App.css';
import Header from './Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// import Login from './components/Login';
import Hairstyle from './components/Hairstyle';
import Nails from './components/Nails';
import Banner from './Banner';
import Hairremoval from './components/Hairremoval';
import Cosmetics from './components/Cosmetics';
import Massage from './components/Massage';
import Men from './components/Men';
import Wrapper2 from './components/Wrapper2';
import Wrapper1 from './components/Wrapper1';
function App() {
  
  return (
    <Router>
    <div className="App">
    <Header />
    <Banner />
    <Switch>
    <Route exact path="/hairstyle"><Hairstyle /></Route>
    <Route exact path="/Nails"><Nails /></Route>
    <Route exact path="/hairremoval"><Hairremoval /></Route>
    <Route exact path="/cosmetics"><Cosmetics /></Route>   
    
    <Route exact path="/cosmetics"><Cosmetics /></Route>
    <Route exact path="/massage"><Massage /></Route>
    <Route exact path="/men"><Men /></Route>
    <Route path="/banner"><Wrapper1 /></Route>
    <Route exact path="/banner"><Wrapper2 /></Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
