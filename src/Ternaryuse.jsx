import React, {useState} from 'react'

export default function Ternaryuse(){
    const [txt,setTxt] = useState("Hello World")

    function ChangeTXT(){
        setTxt(!txt)
    }

    return (
        <div>
            <h1>{txt?"Hello World":"Good Evening"}</h1>
            <button onClick={ChangeTXT}>Click</button>
            
        </div>
    )
}
