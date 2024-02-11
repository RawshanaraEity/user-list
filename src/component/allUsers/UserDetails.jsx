import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useUsersData from "../../Hooks/useUsersData";

const UserDetails = () => {
  const allUsers = useUsersData();
  const { id } = useParams();
  const [user, setUser] = useState({});


  useEffect(() => {
    const findUser = allUsers?.find((data) => data?.id == id);
    setUser(findUser);
  }, [id, allUsers]);

  return (
    <div>
      <div className="card w-2/3 mx-auto  py-10 lg:card-side bg-base-100 shadow-xl">
        <figure className="p-10">
          <img src={user?.image} alt="Album" />
        </figure>
        <div className="flex flex-col justify-center pl-10">
          <h2 className="card-title">
           Name: {user?.firstName} {user?.lastName}
          </h2>
          <p className="font-bold">Email: {user?.email}</p>
          <div className="card-actions flex-col">
            <h2>Company: {user?.company?.name} </h2>
            <p>
              Address: {user?.address?.address},{user?.address?.city}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
