// create your App component here
import React from 'react';
import {useEffect} from "react";
import {useState} from "react";




function App(){

    const [items, setItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

useEffect(() =>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response)=>response.json())
    .then((data)=>setItems(data))
     setIsLoaded(true);
    
}
,[])
console.log(items)
if (!isLoaded) return <p>Loading...</p>;
return (
<>
    
    <img src = {items.message} alt= "A Random Dog" />
</>
)
}
export default App