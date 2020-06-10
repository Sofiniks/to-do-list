import React from 'react'
import './ToDoItem.scss'


const ToDoItem = props => {
   
    return (
        <div className="todo-item">
            <input 
            type="checkbox" 
            defaultChecked={props.completed} 
            id = {props.itemId}
            onChange={props.handleChange}
            />
            <label className="description" htmlFor={props.itemId}>{props.description}</label> 
            <button className = "deleteButton" onClick={props.onDeleteHandler}>Удалить</button>
        </div>
    )
}

export default ToDoItem