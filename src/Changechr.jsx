import React, {useState} from 'react'

export default function Changechr(){
    const [txt,setTxt] = useState("Hello World")

    function ChangeTXT(){
        setTxt("Good Evening")
    }

    return (
        <div>
            <h1>{txt}</h1>
            <button onClick={ChangeTXT}>Click</button>
            
        </div>
    )
}