import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    let todoItems;
    if(this.props.todos){
        todoItems = this.props.todos.map(todo => {
        
        return (
          <TodoItem key={todo.id} todo={todo} />
        );
      });
    }
    return (
      <div className="Todos">
        <h3>All Projects from API</h3>
        <p>Data from this list are source from external API and rendered by React.js. <a href="https://s3-ap-southeast-2.amazonaws.com/api-data-sources/sampledata.json">view api</a></p>
        <ol>
            {todoItems}
        </ol>
        
      </div>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.array,
}

export default Todos;
