// import React,{useState} from 'react'; //imports useState

// function Counter2() {//functional component
  
//    const [count,setCount] = useState(0); 
//    //const [new State,setter function ] = useState(initial state); 
//    /*     setCount: Custom method that updates the state variable, registered here
//              count: current value of state variable
//       useState(0) : initial state property value set=0
//    */
//    return(
//       <div>
//           <h1>Counter App. using State Hooks</h1>
//           <h2>You clicked {count}  times</h2>
//           <button onClick={() => setCount(count+1)}>     {/* Event handler subscription to setCount() */}
//              <h3>Click Me</h3>
//           </button>
//           <button onClick={()=>setCount(count-1)}>     {/* Event handler subscription to setCount() */}
//              <h3>Click Me</h3>
//           </button>
        
//       </div>
//    )
// }   

// export default Counter2;



import React,{useState} from "react";

const Counter = () =>{
   const [count, setCount] = useState(0);

   return(
      <div>
           <h1>useState Hook</h1>
           <h2>you {count} times</h2>
           <button onClick={() => setCount(count+1)}>Increment{count}</button>
           <button onClick={() => setCount(count+1)}>Decrement</button>
      </div>
   )
}
export default Counter;