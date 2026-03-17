import { useParams } from "react-router-dom"; 
import { Link } from 'react-router-dom';
import empid1 from './assets/empid1.jpg'
import empid2 from './assets/empid2.jpg'
import empid3 from './assets/empid3.jpg'
import empid4 from './assets/empid4.jpg'

function UserData(){
    // Declare the useParam hook to get he value from url
    const { id } = useParams();

    // declare the array of object for emplyee data

    const EmpDetails = [
        {
            userId : 1001,
            name : 'Jenilia',
            role : 'Admin',
            city : 'Pune',
            pic : empid1
        },
        {
            userId : 1002,
            name : 'Michel',
            role : 'CEO',
            city : 'Pune',
            pic : empid3
        },
        {
            userId : 1003,
            name : 'Mark',
            role : 'Clerk',
            city : 'Pune',
            pic : empid4
        },
        {
            userId : 1004,
            name : 'Gracia', 
            role : 'MD',
            city : 'Pune',
            pic : empid2
        }
    ]

    //find the data in array of obect using this find function
    const user = EmpDetails.find((e) => e.userId == id); 
   
    // render the user data which found by above function
    return (  
        <div style={{ textAlign: "center"}}>  
        {
            user? ( 
            <div class="container" style={{width: "500px"}}>
                <div class="card">
                    <div class="card-body"> 
                        <p><img src={user.pic}></img></p> 
                        <p><b>UserId:</b> {user.userId}</p>  
                        <p><b>UserName:</b> {user.name}</p>  
                        <p><b>Role:</b> {user.role}</p>  
                        <p><b>City:</b> {user.city}</p>
                    </div>  
                    <h5><Link to={`/user`}>Back</Link> </h5>
                </div>  
                
            </div>
                ) : (
                    <p style={{ color: "red" }}>User not found</p> 
                )
            }
            
        </div> 
    )
}

export default UserData;
