import {useEffect} from 'react';  // import system defined useEffect

const useTitle = (record) => {    // functional component, in this case behaves as as reusebla react custom hook beggining with hook,
    
    useEffect (() => {    // replace componentsDidMount ,componentsDidUpdate & componentsDidUnmount in a class component,
                           // that exist in a class component
                           // for this functional component execute once component is injected into the page

        document.title = `Record ${record}`   // sets the browser tab page title to the value that is passed to that component

    });
}
export default useTitle;

