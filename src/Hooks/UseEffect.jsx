import React,{useEffect,useState} from "react";   // import useState & useEffcet

function UseEffect () {     // functional component with useEffect
    const [isOn, setIsOn] = useState(false);      //useState
    // const [new state, settler function] = useEffect(Initial state);
    /*     setIsOn : Custom method that update the state variable, registered here
             isOn: current value of state variable = empty array
     useEffect(false) : initial state property , boolean for this example set = false
     */
     // syntax: useEffect()
     useEffect(() =>{       // replace componentsDidMount ,componentsDidUpdate & componentsDidUnmount in a class component,
                           // execute once component is injected into the page
        console.log('Executed' + Math.random()*10);   // generate random number*10
        // Indicates useEffect() is called moemnt component is mounted
        
     })
     return(
        <div>
            <h1> useEffect() Effect Hook </h1>

            {!isOn && (               // isOn=false, but !isO will be =true  && setIsOn=true
                <button type="button" onClick={() => setIsOn(true)}> {/*Changes state of isOn= true*/}
                <h1> Subscribe</h1>
                </button>
            )}

            {isOn && (              // isOn=false && setIsOn=false
                <button type="button" onClick={() => setIsOn(false)}> {/*Changes state of isOn= false*/}
                <h1>Sucessfully Subscribed</h1>
                </button>
            )}
        </div>
     )

}
export default UseEffect;