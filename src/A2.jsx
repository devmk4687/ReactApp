import { UserContext } from "./UserContext";
import B2 from './B2'
function A2(){

    const userName = "SuperAdmin";

    return ( 
    <UserContext.Provider value={userName}>
        <B2></B2> 
    </UserContext.Provider>
)
}

export default A2;