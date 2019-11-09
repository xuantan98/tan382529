import React, {Component} from 'react';
import { BrowserRouter as Router, Route, NavLink, } from 'react-router-dom';
import axios from 'axios';
class ListCategory extends Component {
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
          post :res.data
        });
      }).catch( err =>{
      });
    }

    onDelete = (id) =>{
      var {post} = this.state;
      if (confirm('Bạn có chắc muốn xóa?')) { //eslint-disable-line
        axios({
        method: 'DELETE',
        url :`http://localhost:3000/post/${id}`,
        data : null
      }).then(res =>{
        this.setState({
          post : post
        });
      });
      }
      window.location.reload();
    }
    
    render() {
    var {post , index} = this.props;
        return (
                
                <tr className="mb-1">
                  <td className="text-center">{index + 1}</td>
                  <td className="text-center">{post.name}</td>
                  <td className="text-center">{post.summary}</td>
                  <td className="text-center"><img className="img" src={post.image}  width="150px" height="150"/></td>
                  <td className="text-center">
                    <NavLink  
                      to={`/post/${post.id}/edit`} 
                      className="mr-2"><i class="fas fa-pencil-alt"></i>
                    </NavLink>
                    &nbsp;
                    <button onClick ={ () => this.onDelete(post.id)} type="button" className="text-danger">
                    <i class="fas fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
                
        
   		);
	}
}




export default ListCategory;