import React, { Component } from 'react';
import s from './App.module.css';
import './App.module.css'
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import Footer from './components/Footer/Footer';
import { createTodo } from './utils/creators';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      inputValue : '',
      todos: [],
      all:[],
      done:[],
      undone:[],
    };

    this._inputRef = React.createRef();
    this._testRef = React.createRef();
    this.handleTodoClick = this.handleTodoClick.bind(this)
    this.handleAddTodo = this.handleAddTodo.bind(this)
    this.handleTodoRemoveClick = this.handleTodoRemoveClick.bind(this)
    this.onChangeInputText = this.onChangeInputText.bind(this)
    this.handleAllClick = this.handleAllClick.bind(this)
    this.handleCompletedClick = this.handleCompletedClick.bind(this)
    this.handleUncompletedClick = this.handleUncompletedClick.bind(this)
 
  }

  onChangeInputText(inputValue) {
    this.setState({inputValue});
  }

  handleTodoClick(id){
    const currentTodoIndex = this.state.todos.findIndex(i=>i.id === id);
    
    if(currentTodoIndex === -1){
      return;
    }


    const todo = { ...this.state.todos[currentTodoIndex] };
    todo.completed = !todo.completed;
    

    const newTodos = [...this.state.todos]
    newTodos[currentTodoIndex] = todo; 
    this.setState({
      todos: newTodos,
    })
  }
  handleTodoRemoveClick(id){
    this.setState({
      todos: this.state.todos.filter(i =>i.id !== id),
    })
  }

  handleAddTodo(){

    const {inputValue} = this.state;

    if(inputValue.trim().length === 0){
      return;
    }
  
    const todo = createTodo(this.state.inputValue);
    
    this.setState({
        inputValue : '',
        todos: [todo].concat(this.state.todos),
        backupTodos: [todo].concat(this.state.todos),
      });

      this._inputRef.current.focus()

  }


  handleAllClick(){

    let a = document.querySelectorAll('li');
      for(let i=0;i<a.length;i++){
        if(a[i].parentNode.classList.length > 1){
          a[i].parentNode.classList.remove('invisible')
        }
      }
    }

  handleCompletedClick(){

    let a = document.querySelectorAll('li');
    for(let i=0;i<a.length;i++){
      if(a[i].parentNode.classList.length > 1){
        a[i].parentNode.classList.remove('invisible')
      }
    }
    for(let i=0;i<a.length;i++){
      if(a[i].classList.length === 0){
        a[i].parentNode.classList.add('invisible')
      }
    }

  }
  

  handleUncompletedClick(){
  
    let a = document.querySelectorAll('li');
    for(let i=0;i<a.length;i++){
      if(a[i].parentNode.classList.length > 1){
        a[i].parentNode.classList.remove('invisible')
      }
    }
    for(let i=0;i<a.length;i++){
      if(a[i].classList.length > 0){
        a[i].parentNode.classList.add('invisible')
      }
    }
  }

render() {
    return (
      <div className={s.App}>
        
        <div
         className={s.container}
         >
          <Header 
            inputRef={this._inputRef}
            value={this.state.inputValue}
            onChangeText={this.onChangeInputText}
            onClick={this.handleAddTodo}
          />

          <TodoList 
            items={this.state.todos}
            onTodoClick={this.handleTodoClick}
            onTodoRemoveClick={this.handleTodoRemoveClick}
          />
          <Footer 
            items={this.state.todos}
            onAllClick={this.handleAllClick}
            onCompletedClick={this.handleCompletedClick}
            onUncompletedClick={this.handleUncompletedClick}
          />
        </div>
      </div>
    );
  }
}

export default App;
