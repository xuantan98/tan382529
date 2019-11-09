import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import Headerclient, { Menu } from '../Menu.js'
class PostDetail extends Component {
	constructor(props){
        super(props)
        this.state = {
           post : []
        }
    }    
    componentDidMount(){
      var {match} = this.props;
      if (match) {
      	var id = match.params.id;
      	axios({
        method: 'GET',
        url :`http://localhost:3000/post/${id}`,
        data : null
     	 }).then(res =>{
        	this.setState({
         	 post :res.data
        	});
      		}).catch( err =>{
        	console.log(err);
      		});
    	}
      }
 render() {
 	var {post} = this.state;
  	return (
      <div>
          <Menu/>
          <div className="row">
              <div className="detail mt-5 ml-5">
                  <h3 className="card-title ml-3 mb-5">{post.name}</h3>
                  <div className="col-md-8">
                      <img src={post.image} className="card-img" />
                  </div>
                  <div className="card-body">
                      <div className="col-md-8">
                          <div className="row">
                              <b><p className="col-md-12" >{this.state.post.summary}</p></b>
                              <p className="card-text price ml-3">{post.content}</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
   		);
	}
}

export default PostDetail;