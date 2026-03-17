// import react from 'react'

export function Objectrender(){

    const employee = {
        id : 1002,
        name: 'ganesh',
        dept: 'IT',
        salary: 35000
    }
     var d = new Date().toLocaleDateString() // current date
     var t = new Date().toLocaleTimeString() // current time
    return (
        <>
            <h1 style={{color:'red', backgroundColor:'yellow', textAlign:'center'}}>Employee information</h1>
            <p style={{color:'red',  textAlign:'center'}}> {employee.id} </p>
            <p style={{color:'red', textAlign:'center'}}> {employee.name} </p>
            <p style={{color:'red',  textAlign:'center'}}> {employee.dept} </p>
            <p style={{color:'red',  textAlign:'center'}}> {employee.salary} </p>
            <p> {d} </p>
            <p> {t} </p>
        </>
        
    )
}

export default Objectrender;


