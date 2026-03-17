import  { useContext } from "react";
import { UserContext } from "./UserContext";

function D2(){
    const uname = useContext(UserContext);

    return ( <h1>The Username is {uname} </h1> )
}

export default D2;