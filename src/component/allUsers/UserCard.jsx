import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { MdForwardToInbox } from "react-icons/md";

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
            <h2 className="card-title text-2xl justify-center text-center mb-2 hover:text-red-600">
               {firstName} {lastName}
            </h2>
          </Link>
        
          <h2 className="font-medium">{user?.company?.name} </h2>
          <div className="card-actions items-center text-center gap-0 flex-col">
          
          <div className="flex items-center gap-2">
           <span className=""><MdForwardToInbox className="text-xl text-red-500 "></MdForwardToInbox></span>
           <p className="my-2">{email}</p>
           </div>
           <div className="flex items-center gap-2">
           <span className=""><CiLocationOn className="text-2xl text-red-600 font-extrabold"></CiLocationOn></span>
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
