import React,{useState,useEffect} from "react";    // import useEffect & useState
import axios from "axios";

function Axios (){
    const [albums, setAlbums] = useState([]);   // useState

    useEffect(() => {     // replace componentsDidMount ,componentsDidUpdate & componentsWillUnmount that
                         // exist in a class component, for this functional component
                       // execute once component is injected into the page
    axios.get('https://jsonplaceholder.typicode.com/albums')  // send GET request to the REST url for data
    .then(res => {             // listen for response
        console.log(res);
        setAlbums(res.data);      // data passed to the setAlbums() funtion
                                 // that changes the state of the album array and updates it with data
    });
}, []);

return(
    <ul>
        {albums.map((album) => {
                return (
                <li key = {album.id}>  {album.id} {album.title} </li>
                );
            })
        }
    </ul>
);

}
export default Axios;

