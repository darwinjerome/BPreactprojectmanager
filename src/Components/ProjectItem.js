import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectItem extends Component {
    deleteProject(id){
        this.props.onDelete(id);
    }
    
  render() {
    return (
      <li className="Project">
        <strong>{this.props.project.title}</strong>: {this.props.project.category} <button href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>Delete</button>
      </li>
    );
  }
}

ProjectItem.propTypes = {
    project: PropTypes.object,
    onDelete: PropTypes.func
  }
  

export default ProjectItem;
