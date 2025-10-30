// Code Keypad Component Here
import React ,{useState} from "react";
function Keypad (){
    const [name , setName] = useState("")
    function HandleChange (event ){
        setName (event.target.value)
    }
    return ( 
        <div>
            <input type="password" value = {name} onChange={()=>(HandleChange , console.log('Entering password...')) } />
        </div>
    )
} 
export default Keypad;