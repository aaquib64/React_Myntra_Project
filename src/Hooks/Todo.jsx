import React,{useState} from "react";

const creatInitialTodos = () => {
    const InitialTodos = [];
    for(let i=0; i<50;i++)
    {
        InitialTodos.push(
            {
                id : i,
                text: 'Array' + (i+1)
            }
        );
    }
    return InitialTodos;
}

function TodoList() {
    const [todo, setTodo] = useState(creatInitialTodos);  // we can also use creatInitialTodos as a Initiolizer function (creatInitialTodos())
    const [text, setText] = useState('');
    return (
        <div>
            <input 
                 value={text}
                 onChange={(event) => setText(event.target.value)}
            />
            <button onClick={() => {
                setText('')
                setTodo([
                    {
                     id: todo.length,
                     text: text
                    },...todo]);
            }}>  Add  </button>

            <ul>
                {todo.map(item =>(
                    <li key={item.id}> {item.text} </li>
                ))}
            </ul>
        </div>
      );
}

export default TodoList;