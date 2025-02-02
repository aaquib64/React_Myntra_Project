import React, {useState} from "react";
import useTitle from './CustomHook';

const Title2 = () => {
    const [record, setRecord]= useState(0);
    // const [new state, settler function] = useEffect(Initial state);
    /*     setRecord : Custom method that update the state variable, registered here
             record: current value of state variable = empty array
             useEffect(0) : initial state property , numbers array for this example set = 0
    */

    useTitle (record);  // call the custom hook & pass the state variable to it

    return(
        <div>
            <button onClick={() => setRecord(record+1)}> {/* data passed to the setRecord() function,
               change state of record */} 
               Record: {record} </button>
        </div>
    )
}
export default Title2;