import React, { Component } from 'react';
import Home from "./components/home"
import My from "./components/my"
import { HashRouter as Router,Route,Link ,Switch,Redirect} from 'react-router-dom'
class App extends Component {
  render() {
    return (
   
       <Router>
        <div className="App">
          <Switch>
            <Route path="/home"  component={Home} exact/>
            <Route path="/my"  component={My} exact/>
            <Redirect from='/' to='/home'/>
          </Switch>
        
           <Link to="/home">首页</Link>
           <Link to="/my">我的</Link>
        </div>
       </Router>
    
    );
  }
}

export default App;
