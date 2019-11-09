import React, {Component} from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import axios from 'axios';
class AllCategory extends Component {
  constructor(props){
    super(props)
    this.state = {
      category : []
    }
  }    
  componentDidMount(){
    axios({
      method: 'GET',
      url :'http://localhost:3000/category',
      data : null
    }).then(res =>{
      this.setState({
        category :res.data
      });
    }).catch( err =>{
    });
  }

  render() {
    var { category,keyword } = this.state;
    return (
      <React.Fragment>       
      <br/>
      <div className="m-0">
        <div className="text-left">
          {category.map((category,index) => {
            return < Categorylist key={index} cate = {category} />
          })}
        </div>
      </div>
      </React.Fragment>
      );
    }  
  }
  class Categorylist extends Component {

    render() {
      var {cate} = this.props;
      return (
      <div className="" >
      <a className="btn btn-light" style={{width: '100%'}} href={`/postcategory/${cate.id}`}>{cate.category_name}</a>
      <hr></hr>
      </div>  

      );
    }
  }
  export default AllCategory;