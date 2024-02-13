import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const intId = parseInt(id);
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${intId}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [intId]);

  return (
    <div className="container mx-auto">
      <div className="card md:mx-10 lg:w-2/3 lg:mx-auto py-10 md:card-side bg-base-100 ">
        <figure className="p-10">
          <img src={user?.image} alt="Album" />
        </figure>
        <div className="flex flex-col justify-center px-5 md:px-0 md:pl-10">
          <h2 className=" text-3xl font-bold">
            Name: {user?.firstName} {user?.lastName}
          </h2>
          <p className="font-medium my-2">Company: {user?.company?.name} </p>
          <div className="card-actions flex-col">
            <h2 className="font-medium">Email: {user?.email} </h2>
            <p className="font-medium">
              Address: {user?.address?.address},{user?.address?.city}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
