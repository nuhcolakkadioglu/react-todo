import React from 'react'

export default function Item({ todo }) {
    return (
        <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <div className="view">
                <input className="toggle" type="checkbox" checked={todo.com} />
                <label>{todo.text}</label>
                <button className="destroy"></button>
            </div>
        </li>
    )
}
