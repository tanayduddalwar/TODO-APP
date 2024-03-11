export function TodoList(props){
    return (
        <div>
        <div className="todo-header">TODO LIST</div>
 
        <ul className="todo-list">
          {props.todoList.map((i) => {
            return (
              <li className="todo-item ">
                <label> {i} </label>
                <button className="delete-button">Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    )
    
   
}