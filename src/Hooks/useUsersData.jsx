import { useEffect, useState } from "react";


const useUsersData = () => {

    const[ allUsers, setAllUsers] = useState([])
    console.log(allUsers);

    useEffect(() =>{
        fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then(data => setAllUsers(data?.users))
        
    },[])
    return allUsers;
};

export default useUsersData;