import React, {Component} from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import axios from 'axios';
class AllPost extends Component {
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
    }

    render() {
    
    var { posts} = this.state;
    
    
    return (
       <React.Fragment>        
          <div className="">        
              {posts.map((post,index) => {
                    return < Postlist key={index} postlist={post} dm={index}/>
                    
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
            <div class="card mb-3" style={{width: '100%'}}>
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src={postlist.image}  alt="..." width="100%" height="100%"/>
                </div>
                <div class="col-md-8">
                  <div class="card-body doc">
                    <a href={`/post/${postlist.id}/postdetail`} className="text-black"><h5 className="card-title">{postlist.name}</h5></a>
                    <p className="text-left" maxlenght="10">{postlist.summary}</p>
                    <a class="nav-link text-left btn btn-primary" style={{width: '20%'}} href={`/post/${postlist.id}/postdetail`}>Đọc tiếp <i class="fas fa-angle-double-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
export default AllPost;