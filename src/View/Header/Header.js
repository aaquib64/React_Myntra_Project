import react,{Component} from 'react';

class Header extends Component {
   constructor(){
    super();
    this.state={                                             // State
        title: 'React App',                                 // props
        userInput: 'Plz. enter product to search'
      }
   }

   inputChange = (event) => {      // If text box has value, store that in userInput prop else store string "Plz. enter product to search"
        this.setState({userInput: event.target.value ? event.target.value: 'Plz. enter product to search'})
   }

    render() { 
        return (
                <div>
                    <center>
                            <h1> Music Store</h1>
                            <center>
                                <input placeholder="Product to serach" onChange={this.inputChange}/>   {/*  */}
                            </center>
                                <p> {this.state.userInput} </p>      {/* Display data from the prop  */}
                    </center>
                    <hr/>       
                </div>
        );
    }
}
 
export default Header;