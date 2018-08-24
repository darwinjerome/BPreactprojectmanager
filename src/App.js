import React, { Component } from 'react';
import './App.css';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import uuid from 'uuid';
import $ from 'jquery';
import Todos from './Components/Todos';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: []
    }
  }

  getTodos(){
    $.ajax({
      //url: "https://jsonplaceholder.typicode.com/todos",
      url: "https://s3-ap-southeast-2.amazonaws.com/api-data-sources/sampledata.json",
      dataType: "json",
      cache: false,
      success: function(data){
        this.setState({todos: data}, function(){
        })

      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });

  }

  getProjects(){
    this.setState({projects: [
      {
        id:uuid.v4(),
        title: "Build mobile responsive React website ",
        category: "Programming"
      },
      {
        id:uuid.v4(),
        title: "Design draft for mobile and web application",
        category: "Creatives"
      },
      {
        id:uuid.v4(),
        title: "Setup EBS and Route53 on AWS",
        category: "Server Management"
      }
    ]});
  }

  componentWillMount(){
    this.getProjects();
    this.getTodos();
  }

  componentDidMount(){
    this.getTodos();

  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects:projects});
  }

  render() {
    return (
      <div className="App">
        <div id="header" className="header-shadow"></div>
        <div className="main-content">
          
          <div className="banner">
            <h1>React.js Demo</h1>
            <p>This is an example of a simple product management module showcasing a React.js implementation including:</p> <p>Create-react-app CLI, ReactJS Components, State & Properties, Event Handling, JSX - JavaScript Syntax Extension, Lifecycle Methods, HTTP Requests.</p>
            <p>This app is deployed via AWS Elastic Beanstalk.</p>
          </div>
          <div className="content-body">
            <div className="add-project">
              <AddProject addProject={this.handleAddProject.bind(this)} products={this.state.projects} />
            </div>
            <div className="divclear"></div>
            <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
            <hr/>
            <Todos todos={this.state.todos} />
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;