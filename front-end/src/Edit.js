import React, {Component} from 'react';
import axios from 'axios';

class Edit extends Component{

    componentDidMount(){
        console.log(this.props)
        const tid = this.props.match.params.id;
        axios({
            method: 'GET',
            url: `http://localhost:3000/getTask/${tid}`
        })
    }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.addNewTask} className="add-box">
                    <input type="text" id="new-task" placeholder="New Task" />
                    <input type="date" id="new-task-date" />
                    <button type="submit" className="btn btn-primary">Update</button>
                </form>            
            </div>
        )        
    }
}

export default Edit;