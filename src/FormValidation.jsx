import { useState } from 'react'

function FormValidation(){
    const [data,setData]=useState(
        {
           uname:'',
           mno:'',
           eid:'',
           pass:'',
           cpass:''
        }  
      )
      const [result,setResult]=useState([])
      
      const [error,setError]=useState({})
      const validationError={}

      function txtHandler(e)
      {
        let name=e.target.name;
        let value=e.target.value;
        console.log(name,value)
        setData({...data,[name]:value})
      }
      function submitHandler(e)
      {
       e.preventDefault()
        setResult([...result,data])
        //setData({uname:"",mno:"",eid:"",pass:""})
        if(!data.uname)
        {
            validationError.uname="Username is required"
        }
        else if(!/^([A-Z]{1,1})+([a-z]{1,9})$/.test(data.uname))
        {
               validationError.uname="Invalid username"
        }
        if(!data.mno)
        {
            validationError.mno="MobileNo is Required"
        }
        else if(!/^([789]{1,1})+([0-9]{9,9})$/.test(data.mno))
        {
            validationError.mno="Invalid Mobile no"
        }
        if(!data.eid)
        {
            validationError.eid="Email id is required"
        }
        else if(!/\S+@\S+\.\S+/.test(data.eid))
        {
            validationError.eid="invalid email id"
        }
        if(!data.pass)
        {
            validationError.pass="Password is required"
        }
        else if(data.pass.length<6)
        {
                 validationError.pass="password should be at least 6 char"
        }
        if(data.cpass!==data.pass)
        {
           validationError.cpass="Please enter password and confirm password is same"  
        }
         setError(validationError)
      }
  return (
    <>
     <h1>This is contact component</h1>
     <div className="container" style={{width: "500px"}}>
        <div className="card">
            <div className="card-body"> 
        <form action=" " onSubmit={submitHandler}>
        <label>Enter name:</label>
        <input type="text" name="uname" id="uname" onChange={txtHandler}></input>   

        {error.uname && <span style={{color:'red'}}>{error.uname}</span>}<br></br><br></br>
        <label>Enter Mno:</label>
        <input type="text" name="mno" id="mno" onChange={txtHandler}></input>

        {error.mno && <span style={{color:'red'}}>{error.mno}</span> }<br></br><br></br>
        <label>Enter Email:</label>
        <input type="text" name="eid" id="eid" onChange={txtHandler}></input>
        {error.eid && <span style={{color:'red'}}>{error.eid}</span> }    
        <br></br><br></br>

        <label>Enter Password:</label>
        <input type="text" name="pass" id="pass" onChange={txtHandler}></input>
         {error.pass && <span style={{color:'red'}}>{error.pass}</span> }  
        <br></br><br></br>

        <label>Enter  Confirm Password:</label>
        <input type="text" name="cpass" id="cpass" onChange={txtHandler}></input>
         {error.cpass && <span style={{color:'red'}}>{error.cpass}</span> }  <br></br><br></br>
        
        <input type="submit" value="submit" ></input>
     
        </form>
        </div>
        </div>
        </div>
        </>
  )
}

export default FormValidation;