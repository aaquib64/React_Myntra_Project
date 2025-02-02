import React from "react";

class Counter1 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        };
    }

    render() {
        return (
            <div> 
                <h1>You click {this.state.count}  times</h1>   //In class components we need access by using this keyword
                <button onClick={() => this.setState( {count: this.state.count + 1} )}>Click me </button>
            </div>
        );
    }
}
export default Counter1;