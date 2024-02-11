import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";

const UserCard = ({ user }) => {
  const { id, image, firstName, lastName, email } = user;

  return (
    <div>
      <div className="card bg-base-100 border hover:shadow-xl">
        <figure className="px-5 pt-10 ">
          <img src={image} alt="Image" className="h-48 rounded-lg " />
        </figure>
        <div className="text-center  pt-10  h-48">
          <Link to={`userDetails/${id}`}>
            <h2 className="card-title justify-center text-center mb-2 hover:text-red-600 hover:underline">
              Name: {firstName} {lastName}
            </h2>
          </Link>
        
          <h2 className="font-bold">Company: {user?.company?.name} </h2>
          <div className="card-actions items-center text-center gap-0 flex-col">
          <p>Email: {email}</p>
           <div className="flex items-center gap-2">
           <span className=""><CiLocationOn className="text-xl text-red-600 font-bold"></CiLocationOn></span>
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
