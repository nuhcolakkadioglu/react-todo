import { createContext, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState(
        [
            { id: 1, text: "işler bitmez", completed: false },
            { id: 2, text: "React todo yap", completed: true }
        ]
    );
    const addTodo = (text) => setTodos((prev) => [...prev, { id: uuidv4(), text: text, completed: false }])

    const values = {
        todos,
        setTodos,
        addTodo
    };

    return <TodoContext.Provider value={values}>
        {children}
    </TodoContext.Provider>
}

export const useTodo = () => {
    return useContext(TodoContext);

}