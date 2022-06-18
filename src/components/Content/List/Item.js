import React from 'react'
import { useTodo } from '../../../contexts/TodoContext'

export default function Item({ todo }) {
    const { onDestroy, toggleTodo } = useTodo();
    const onChange = (id) => toggleTodo(id);


    return (
        <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <div className="view">
                <input className="toggle" type="checkbox"
                    onChange={() => onChange(todo.id)}
                    checked={todo.completed} />
                <label>{todo.text}</label>
                <button onClick={() => onDestroy(todo.id)} className="destroy"></button>
            </div>
        </li>
    )
}
