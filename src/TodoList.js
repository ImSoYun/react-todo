import React, { useState } from "react";

const TodoList = ({ todos = [], DeleteTodoList }) => {
  const deleteList = ( id ) => {
    DeleteTodoList(id);
  }
 
  const [enabled, setEnabled] = useState([ false ]);
  const toggleClass = ( index ) => {
    let toggleList = document.getElementsByClassName('toggle');
    toggleList[index].classList.contains('active') === true ? 
    toggleList[index].classList.remove('active') : toggleList[index].classList.add('active');
  }
 
   return (
     <ul>
       {todos.map((todo, key) => (
         <li key={key}>
           <div className="toggle" onClick={() => toggleClass(key)}>
             {todo}
           </div>
           <span onClick={() => deleteList(key)}>X</span>
         </li>
       ))}
     </ul>
   );
}

export default TodoList;