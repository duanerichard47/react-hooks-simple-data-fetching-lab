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
}
,[])
if (!isLoaded) return <h3>Loading...</h3>;
return (
<>
    <p>"Loading..."</p>
    <img src = {items.message} alt= "A Random Dog" />
</>
)
}
export default App