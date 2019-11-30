import React,{Component} from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

export class Todos extends Component{
 render()
 {
   return(this.props.AllTodos.map((todo)=>(
       <Item key={todo.id} Item={todo} markComplete={this.props.markComplete} deleteTodo={this.props.deleteTodo}/>
   )))
 }
}


//AllTodos
Todos.propTypes={
 AllTodos:PropTypes.array.isRequired,
 markComplete:PropTypes.func.isRequired,
 deleteTodo:PropTypes.func.isRequired
}

export default Todos;
