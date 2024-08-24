import React, { useState } from 'react';
import { useTodo } from '../contexts/TodoContext';


function TodoInput() {
  const [text, setText] = useState("");
  const {addTodo} = useTodo();

  const add = (e) => {
    e.preventDefault()
    if (!text) return
    addTodo({text});
    setText("");
  }
 
  return (
      <div className='text-white my-6 flex justify-center'>
      <div className='w-full max-w-md flex items-center border border-white p-4'>
        <input 
          type="text" 
          name="task" 
          placeholder='Add Task...' 
          className='flex-grow bg-gray-800 text-white border border-gray-600 p-2 mr-2'
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button className='border border-white px-4 py-2' 
        onClick={add}
        >Add</button>
      </div>
    </div>
      
    
  );
}

export default TodoInput;
