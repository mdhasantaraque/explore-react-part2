import { useEffect, useState } from "react";
import Friends from "../Friends";

export default function Users(){
    const [users, setUsers]=useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
    return(
    <>
     <h3>Total Users:{users.length}</h3>
     {users.map(user=><Friends friend={user}></Friends>)}
    
    </>
    )
}