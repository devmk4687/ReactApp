// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';

function UserList() {
    const EmpDetails = [
        {
            userId : 1001,
            name : 'Rajesh',
            role : 'Admin',
            city : 'Pune'
        },
        {
            userId : 1002,
            name : 'Nishant',
            role : 'CEO',
            city : 'Pune'
        },
        {
            userId : 1003,
            name : 'Ganesh',
            role : 'Clerk',
            city : 'Pune'
        },
        {
            userId : 1004,
            name : 'Yash',
            role : 'MD',
            city : 'Pune'
        }
    ]
  return (
    <div>
      
      <h1>This is Employee Details page</h1>
         <>
        <table>
            <thead>
                <tr>
                    <th>Emp Id</th>
                    <th>Emp Name</th>
                    <th>Emp Designation</th>
                    <th>Emp City</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
               
                    {EmpDetails.map((e)=> (
                        
                    <tr key={e.userId}>
                        <td>{e.userId}</td>
                        <td>{e.name}</td>
                        <td>{e.role}</td>
                        <td>{e.city}</td>
                         <td> 
                             <Link to={`/userdata/${e.userId}`}>Details</Link> 
                        </td> 
                    </tr>
                   ))}
                
            </tbody>
        </table>
        </>
    </div>
  );
}

export default UserList;