import React,{useState,useEffect} from "react";
import axios from "axios";

function TodoAxios (){
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(res => {
            console.log(res);
            setTodos(res.data);
        });
    }, []);

    return(
        <ul>
            {todos.map((todo) =>{
                return(
                    <li key={todo.id}>  {todo.id} {todo.title}  </li>
                     );   
                })
            }
        </ul>
    );
}
export default TodoAxios;