import React from "react";
import { useTodo } from "../contexts/TodoContext";

function Task({ name, id, completed }) {
  const { deleteTodo, toggleCompleted } = useTodo();

  const handleCheckboxChange = () => {
    toggleCompleted(id);
  };

  return (
    <div className='text-white pt-6 flex justify-center'>
      <div className='w-full max-w-md'>
        <div className='flex justify-between items-center border border-white p-4 mb-2'>
          <div className='flex items-center'>
            <label className={completed ? "line-through" : ""}>
              <input
                type="checkbox"
                name="task"
                id={id}
                className='mr-2'
                checked={completed}
                onChange={handleCheckboxChange}
              />
              {name}
            </label>
          </div>
          <div>
            <button
              className='border border-white px-2 py-1'
              onClick={() => deleteTodo(id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;
