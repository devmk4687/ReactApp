
import { useState } from "react"  

function Calculator(){

    const [txt1, setTxt1] = useState();
    const [txt2, setTxt2] = useState();
    const [result, setResult] = useState();

    function addHandler(){
        setResult( parseInt(txt1) + parseInt(txt2))
    }

    function subHandler(){
        setResult( parseInt(txt1) - parseInt(txt2))
    }

    function mulHandler(){
        
        setResult( parseInt(txt1) * parseInt(txt2))
    }
    function divHandler(){
        setResult( Number(txt1) / parseInt(txt2))
    }

    return(
    
    <div className="container" style={{width: "500px"}}>
        <div className="card">
            <div className="card-body"> 
                <h1>Calculator</h1>
                <p> <input type="text" name="fno" onChange={((e)=>setTxt1(e.target.value))}></input> </p>
                <p><input type="text" name="fno" onChange={((e)=>setTxt2(e.target.value))}></input> </p>
                <p>
                    <button onClick={addHandler}>+</button>
                    <button onClick={subHandler}>-</button>
                    <button onClick={mulHandler}>*</button>
                    <button onClick={divHandler}>/</button>
                </p>
                    <legend><h1>{result}</h1></legend>
            </div>
        </div>
    </div>
   
    )
}

export default Calculator;