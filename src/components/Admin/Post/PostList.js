import React, {Component} from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import PostItem from './PostItem.js';
import Header from '../Header.js';
class CategoryList extends Component {
	 constructor(props){
        super(props)
        this.state = {
           post : []
        }
    }    
    componentDidMount(){
      axios({
        method: 'GET',
        url :'http://localhost:3000/post',
        data : null
      }).then(res =>{
        this.setState({
          post : res.data
        });
      }).catch( err =>{
      });
    }

    render() {
      if (!localStorage.username) {
        return <Redirect to="/login"/>;
      }
    var { post } = this.state;
    var elmPost = post.map((post, index)=> {
      return < PostItem key = {post.id} index ={index} post ={post}/>
    });
    
    return (
      <React.Fragment>
        <Header></Header>
        <div className="btn-group mt-5 mb-3 ml-3">
        <NavLink className="navbar-brand" to="/post/add"><button type="button" className="btn btn-primary btn-menu"><i class="fas fa-plus-circle"></i> Thêm mới</button></NavLink>
        </div>

        <div className="container-fluid">
        <table className="table table-bordered">
                  <thead className="table-dark">
                    <tr >
                      <th className="text-center T1">STT</th>
                      <th className="text-center T2">Tên Bài viết</th>
                      <th className="text-center T4">Tóm Tắt</th>
                      <th className="text-center T5">Ảnh</th>
                      <th className="text-center T6">Tùy Chọn</th>
                    </tr>
                  </thead>
                  <tbody>
                    { elmPost }
                  </tbody>
                </table>
        </div>        
        </React.Fragment>
       
       );
  }
}

export default CategoryList;