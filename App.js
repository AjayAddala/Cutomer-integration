import logo from './logo.svg';
import Home from './components/home';
import Nav from './components/nav';
import Login from './components/login';
import Posts from './components/posts';
import PageNotFound from './components/pagenotfound';
import Register from './components/Register';
import Customer from './components/customer';
import AddCustomer from './components/addcustomer';
import UpdateCustomer from './components/updatecustomer';
import getCustomerbymobileNo from './components/getCustomerbymobileNo';
import { Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";


function App() {
  return (
    <div className="App">
      
      <Nav />
      <Switch>

        <Route path="/posts" component={Posts} />

        <Route path="/login" component={Login} />

        <Route path="/Register" component={Register} />

        <Route path="/Customer" component={Customer}/>

        <Route path="/addCustomer" component={AddCustomer}/>

        <Route path="/updatecustomer" component={UpdateCustomer}/>

        <Route path="/getCustomerbymobileNo" component={getCustomerbymobileNo}/>

        <Route exact path="/" component={Home} />

        <Redirect from="/home" to="/" />

        <Route component={PageNotFound} />

      </Switch>
    
     
    </div>
  );
}

export default App;
