import { createContext, useContext, useState } from 'react';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState(
        [
            { id: 1, text: "işler bitmez", completed: false },
            { id: 2, text: "React todo yap", completed: true }
        ]
    );

    const values = {
        todos,
        setTodos
    };

    return <TodoContext.Provider value={values}>
        {children}
    </TodoContext.Provider>
}

export const useTodo = () => {
    return useContext(TodoContext);

}