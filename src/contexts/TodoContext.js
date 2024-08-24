import {createContext, useContext} from 'react'

export const TodoContext = createContext({
    todos: [{
        id:1,
        name: "msg1",
        completed: false
    },
    {
        id:2,
        name: "msg2",
        completed: false
    }
    ],
    addTodo: (name) => {},
    updateTodo: (id, name) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
});

export const TodoContextProvider = TodoContext.Provider;

export const useTodo = () => {
    return (
        useContext(TodoContext)
    )
} 