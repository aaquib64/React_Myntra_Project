import React, {useState} from "react";
import useTitle from './CustomHook';

const Title1 = () => {
    const [record, setRecord]= useState("Shaikh");   // useState
    // const [new state, settler function] = useState(Initial state);
    /*     setRecord : Custom method that update the state variable, registered here
             record: current value of state variable = empty array
             useEffect(0) : initial state property , numbers array for this example set = 0
    */

    useTitle (record);  // call the custom hook & pass the state variable to it

    return(
        <div>
            <h1> Custom Hook</h1>
            <button onClick = {() => setRecord ("Aaquib")}> {/* data passed to the setRecord() function,
               change state of record */} 
               Record: {record} </button>
        </div>
    )
}
export default Title1;