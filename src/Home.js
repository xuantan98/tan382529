import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Menu from './components/Admin/Menu.js';
import AllCategory from './components/AllCategory.js';
import AllPost from './components/AllPost';

class App extends Component {
  render(){
  return (
    <Router>
      <div className="col-md-12 mb-5"><Menu/></div>
      <div className="container-fluid">
        <div className="row col-md-12">
         <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h5>DANH SÁCH DANH MỤC</h5>
                <hr style={{width:'96%'}}></hr>
                <AllCategory/>
              </div>
            </div>
         </div> 
         <div className="col-md-9">
            <div className="card">
              <div className="card-body">
                <h5 className="">DANH SÁCH TIN TỨC</h5>
                <hr className="" style={{width: '100%'}}></hr>
                <AllPost/>
              </div>
            </div>
         </div>
        </div>    
      </div>
    </Router>
    );

  }
}

export default App;