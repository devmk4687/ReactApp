
import { useState } from "react"  
import { ActionButton } from "./ActionButton";

function Contactus() {
  // declared usestate to hold the data and in the form of array of object
  const [data,setData]=useState( { uname:'', mno:'', eid:'', pass:'' } ) 

  //declare the result and setresult
  const [result,setResult]=useState([])
  const HandleTextMessage = () =>{
    alert("Hi Am here");
  }
  function txtHandler(e){
    var name = e.target.name;
    var value = e.target.value;
    setData( {...data,[name]:value})
  }
  function submitHandler(e){
    e.preventDefault();
    setResult([...result,data]) 
    setData({uname:"",umob:"",email:"",upass:""}) 
  }
  return (
    <div>
        <h1>Contact Us</h1>
       <div className="container" style={{width: "500px"}}>
        <div className="card">
            <div className="card-body"> 
             <form action=" " onSubmit={submitHandler}> 
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Name</label>
                <input type="text" className="form-control" id="uname" name="uname" onChange={txtHandler} ></input>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Mobile No.</label>
                <input type="text" id="umob" name="umob" onChange={txtHandler}></input>
              </div>
               <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Email</label>
                <input type="email" className="form-control" id="uemail" name="uemail" onChange={txtHandler}></input>
              </div>
               <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Password</label>
                <input type="text" id="upass" name="upass" rows="3" onChange={txtHandler}></input>
              </div>
              <input type="submit" value="submit" ></input>
     
              </form>
            <ActionButton text="Send Message" onClick={HandleTextMessage}></ActionButton>
            </div>
              
          </div>
      </div>
      <table classNameName='table table-bordered'>
              <tr>
                <th>username</th>
                <th>Mno</th>
                <th>Emailid</th>
                <th>Password</th>
              </tr>
              {
     
                  result.map((e)=>
                  {
                    return(
                      <tr>
                        <td>{e.uname}</td>
                        <td>{e.umob}</td>
                        <td>{e.uemail}</td>
                        <td>{e.upass}
                          </td></tr>
                      
                    )
                  })
              }
            </table>
    </div>
    
  );
}

export default Contactus;

