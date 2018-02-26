import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    let todoItems;
    if(this.props.todos){
        todoItems = this.props.todos.map(todo => {
        
        return (
          <TodoItem key={todo.title} todo={todo} />
        );
      });
    }
    return (
      <div className="Todos">
        <h3>Product Suppliers</h3>
        <p>Data from this list are source from external API and rendered by React.js. <a href="https://jsonplaceholder.typicode.com/todos">view api</a></p>
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
