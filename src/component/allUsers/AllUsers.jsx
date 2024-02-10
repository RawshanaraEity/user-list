import UserCard from "./UserCard";
import useUsersData from "../../Hooks/useUsersData";

const AllUsers = () => {

    const allUsers = useUsersData()


    return (
        <div className="py-10">
            
            {/* <h2 className="text-4xl"> All users: {allUsers.length} </h2> */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
           {
                allUsers.map(user => <UserCard key={user.id} user={user}></UserCard>)
            }
           </div>
        </div>
    );
};

export default AllUsers;