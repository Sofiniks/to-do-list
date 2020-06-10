import React, {useState} from 'react';
import ToDoItem from './ToDoItem/ToDoItem'
import Header from './Header/Header'
import './App.scss';


function App () {

  let todosData;
  localStorage.length < 1 ? todosData = [] : todosData = JSON.parse(localStorage.getItem('toDoItems'))

    const [todos, setTodos] = useState(todosData)
    const [inputs, setInputs] = useState('');
    

  const handleChange = id => {
    const newState = todos.map(item =>
      item.id === id ? {...item, completed: !item.completed} : item)
      setTodos(newState)
  }

  const addToDoItem = () => {
    const inputValue = {
        id: Math.round(Math.random() * 10000000),
        text: inputs,
        completed: false
    };
    const newState = [inputValue, ...todos];
    setInputs('');
    setTodos(newState)
  }


const onDeleteHandler = id => {
  const newState = todos.filter(item => item.id !== id);
  setTodos(newState);
}

 
    const activeTasks = todos.filter(task => task.completed === false);
    const completedTasks = todos.filter(task => task.completed === true);
    const finalTasks = [...activeTasks,...completedTasks].map(item => {
    return (
      <ToDoItem
        key={item.id}
        itemId = {item.id}
        description={item.text}
        completed={item.completed}
        handleChange={ () => handleChange(item.id)}
        onDeleteHandler={() => onDeleteHandler(item.id)}
      />
    )
  })

  localStorage.setItem('toDoItems', JSON.stringify(todos));
 
  return (
    <div className="App">
    <div className="toDoList-wrapper">
      <Header/>
      {finalTasks}
      <input className="toDoInput" value={inputs || ''} onChange={event => setInputs(event.target.value)}/>
      <button className="toDoButton" onClick={addToDoItem}>Добавить дело</button>
    </div>
      
    </div>
  );
}

export default App;









