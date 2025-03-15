import React,{useState} from 'react'; //imports useState


function Counter3() {                      //functional component
   
   const initialCount = 0;                  //Initial state value
   const [count,setCount] = useState(initialCount); 
    //const [new State,setter function ] = useState(initial state); 
   /*     setCount: Custom method that updates the state variable, registered here
             count: current  state variable
      useState(0) : initial state property of count set =0
   */
    const increaseByTwo = () => {             //event handler
        setCount(count => count + 2);       //function has access to the old value  & then increments it +1 .
    }

    const increasrByOne = () => {
      setCount(count => count+1);
    }
   return(
      <div>
          <h1>useState() with previous State</h1>
          <h1>Count :  {count}</h1>
          <button onClick={() => setCount(initialCount) } >Reset</button>   {/* Resets to initial state value */}
          {/* <button onClick={() => setCount(count => count +1 ) } >Increase</button>  Remembers the previous value and increments/decrements */}
          <button onClick={increasrByOne} >Increase</button>
          <button onClick={() => setCount(count => count -1 ) } >Decrease</button>
          <button onClick={increaseByTwo} >Increase By 2</button>
      </div>
   )
}
export default Counter3;