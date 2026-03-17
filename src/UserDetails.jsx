import {  useParams } from "react-router-dom";

function UserDetails() {
const { id } = useParams(); // get id from URL

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
    ];
    return (
    <div>
    <h1>User Info-</h1>
{ EmpDetails.map((e)=> { 
  if(e.userId==id) { return( 
      <div>
          {e.userId}

          {e.name}

          {e.role}

          {e.city}
      </div>

) } else if(e.name===id) { return(
  <div>
      {e.userId}

      {e.name}

      {e.role}

      {e.city}
  </div>
) } else if(e.role===id) { return(
  <div>
        {e.userId}

        {e.name}

        {e.role}

        {e.city}
</div>

) } else if(e.city===id) { return(
  <div>
        {e.userId}

        {e.userName}

        {e.role}

        {e.city}
</div>
) } }) }
    </div>
  );


}

export default UserDetails;