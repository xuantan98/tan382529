import React, {Component} from 'react';
import { BrowserRouter as Router, Route, NavLink, } from 'react-router-dom';
import axios from 'axios';
class ListCategory extends Component {
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

    onDelete = (id) =>{
      var {category} = this.state;
      if (confirm('Bạn có chắc muốn xóa?')) { //eslint-disable-line
        axios({
        method: 'DELETE',
        url :`http://localhost:3000/category/${id}`,
        data : null
      }).then(res =>{
        this.setState({
          category : category
        });
      });
      }
      window.location.reload();
    }
    
    render() {
    var {category , index} = this.props;
        return (
                <tr className="mb-1">
                  <td className="text-center">{index + 1}</td>
                  <td className="text-center">{category.category_name}</td>
                  <td className="text-center">
                    <NavLink  
                      to={`/category/${category.id}/edit`} 
                      className="mr-2"><i class="fas fa-pencil-alt"></i>
                    </NavLink>
                    &nbsp;
                    <button onClick ={ () => this.onDelete(category.id)} type="button" className="text-danger">
                    <i class="fas fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
        
   		);
	}
}




export default ListCategory;