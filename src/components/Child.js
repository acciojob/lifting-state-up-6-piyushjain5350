import React,{useState} from 'react';


const Child =({ todos, handleCompleteTodo })=>{
    return (
        <div id="child">
          <h2>Child Component</h2>
              {
                todos.map((todo, index) => (
                <li key={index}>
                  {todo.title}
                  {!todo.completed && (
                    <button onClick={() => handleCompleteTodo(index)}>Complete</button>
                  )}
                </li>
              ))
              }
        </div>
      );
}

export default Child;