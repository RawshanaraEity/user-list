import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useUsersData from "../../Hooks/useUsersData";


const UserDetails = () => {
    const allUsers = useUsersData()
    const {id} = useParams()
    const [user, setUser] = useState({})
    
   

   useEffect(() => {

    const findUser = allUsers?.find(data => data.id == id)
    setUser(findUser)

   }, [id,allUsers])

    return (
        <div>
             <h2>Company: {user?.company?.name} </h2>

           
        </div>
    );
};

export default UserDetails;