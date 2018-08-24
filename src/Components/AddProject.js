import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

class AddProject extends Component {
    constructor(){
        super();
        this.state = {
            newProject:{}
        }
    }

    static defaultProps = {
        categories: ["Programming", "Design", "Server Management"]
    }

    handleSubmit(e){
        if(this.refs.title.value === ''){
            alert('Title is required');
        }else{
            this.setState({newProject:{
                id: uuid.v4(),
                title: this.refs.title.value,
                category: this.refs.category.value
            }}, function(){
                this.props.addProject(this.state.newProject);
                this.refs.title.value = "";
            });   
        }
        e.preventDefault();
    }

    render() {
        // loads categories from existing list/props
        /* let categoryOptions = this.props.products.map(product => {
            return <option key={uuid.v4()} value={product.category}>{product.category}</option>
        }) */

        //loads the static defaultProps
        let categoryOptions = this.props.categories.map(category => {
            return <option key={category} value={category}>{category}</option>
        });
        
    return (
      <div>
        <h3>Add Task</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="block">
                <label> Task</label>
                <input type="text" ref="title" />
            </div>
            <div className="block">
                <label>Category</label>
                <select ref="category">
                    {categoryOptions}
                </select>
            </div>
            <div className="block">
                <input type="submit" value="ADD IT" />
            </div>
        </form>
      </div>
    );
  }
}

AddProject.propTypes = {
    categories: PropTypes.array,
    addProject: PropTypes.func
}

export default AddProject;