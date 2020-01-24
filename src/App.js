import React from 'react';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom'
import './App.css';
import Login from './components/Login'
import EmployeeList from './components/EmployeeList'

function App() {
  return (
    <div className="App">
      {/* <Login />
      <EmployeeList /> */}

      <Router >
            <Switch>
              <Route exact path="/" component={Login}></Route>
              <Route exact path="/employeeList" component={EmployeeList}></Route>
            </Switch>
      </Router>


    </div>
  );
}


export default App;
