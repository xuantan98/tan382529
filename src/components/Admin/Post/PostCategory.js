import React, {Component} from 'react';
// import {  NavLink } from 'react-router-dom';
import axios from 'axios';
import Menu from '../Menu';
class PostCategory extends Component {
   constructor(props){
        super(props)
        this.state = {
           posts : []
        }
    }    
    componentDidMount(){
      axios({
        method: 'GET',
        url :'http://localhost:3000/post',
        data : null
      }).then(res =>{
        this.setState({
          posts :res.data
        });
      }).catch( err =>{
      });
      var {match} = this.props;
        if (match) {
          var id = match.params.id;
          this.setState({
          idd :id
        });
        }
    }


    render() {
    var { posts,keyword,idd } = this.state;

    return (
       <React.Fragment>        
          <div className="">      
              {posts.map((post,index) => {
                 console.log(post.name);
                if ( idd === post.category_id) {
                  return < Postlist key={index} postlist={post} />         
                }    
                })}
         </div>
        </React.Fragment>
       );
  }
}

class Postlist extends Component {
 
    render() {
      var {postlist} = this.props;
        return (
          <div>
            <Menu></Menu>
            <div className="card" style={{width: '90%', marginTop: '80px'}}>
              <div className="row no-gutters">
                <div className="col-md-3">
                  <img src={postlist.image}  alt="..." width="100%" height="100%"/>
                </div>
                <div className="col-md-9">
                  <div className="card-body">
                    <h5 className="card-title text-left">{postlist.name}</h5>
                    <p className="text-left" maxlenght="10">{postlist.summary}</p>
                    <a className="nav-link text-left btn btn-primary" style={{width: '110px'}} href={`/post/${postlist.id}/postdetail`}>Đọc tiếp <i class="fas fa-angle-double-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
export default PostCategory;