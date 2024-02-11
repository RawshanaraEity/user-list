import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";

const UserCard = ({ user }) => {
  const { id, image, firstName, lastName, email } = user;

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-5 pt-10 ">
          <img src={image} alt="Image" className="h-48 rounded-xl " />
        </figure>
        <div className="text-left pl-10 pt-10  h-48">
          <Link to={`userDetails/${id}`}>
            <h2 className="card-title mb-2 hover:text-red-600 hover:underline">
              Name: {firstName} {lastName}
            </h2>
          </Link>
          <p>Email: {email}</p>
          <div className="card-actions gap-0 flex-col">
            <h2>Company: {user?.company?.name} </h2>
           <div className="flex items-center gap-2">
           <span className="text-xl"><CiLocationOn></CiLocationOn></span>
            <p>
               {user?.address.address},{user?.address?.city}
            </p>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
