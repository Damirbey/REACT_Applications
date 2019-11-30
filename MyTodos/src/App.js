import React,{Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
//import uuid from 'uuid';
import Todos from './components/Todos';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import './App.css';


export class App extends Component{
  //App Level State
  state={
    allTodos:[
     
    ]
  }
// Marking all completed todos function
 markComplete=(id)=>{
  this.setState({allTodos:this.state.allTodos.map((todo)=>{
    if(todo.id===id)
    {
      todo.completed=!todo.completed;
    }
    return todo;
  })})
}
//Making an HTTP request to the FAKE Online REST API(Jsonplaceholder)
componentDidMount()
{
  axios.get("http://jsonplaceholder.typicode.com/todos?_limit=10")
  .then(res=>this.setState({allTodos:res.data}));
}
//deleting todo function
deleteTodo=(id)=>{
  axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`)
  .then(res=>this.setState({allTodos:[...this.state.allTodos.filter((todo)=>todo.id!==id)]}))
}
//Adding new Todos to the list function
addTodo=(title)=>{
  axios.post('http://jsonplaceholder.typicode.com/todos',{
    title,
    completed:false
  })
  .then(res=>this.setState({allTodos:[...this.state.allTodos,res.data]}));
}
//render function used to render the component
 render()
 {
   return(
     <Router>

        <div className="App">
            <div className="container">
                <Header/>
                <Route exact path='/' render={props=>
                  <React.Fragment>
                    <AddTodo addTodo={this.addTodo}/>
                    <Todos AllTodos={this.state.allTodos} markComplete={this.markComplete} deleteTodo={this.deleteTodo}/>
                    </React.Fragment>
                }>
                </Route>
                <Route path="/about" component={About}/>
            </div>                
          </div>
      </Router>
          ) 
 }

}

export default App;
