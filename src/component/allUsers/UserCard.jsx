import { Link } from "react-router-dom";


const UserCard = ({user}) => {

    const {id, image, firstName, lastName, email } = user;

  return (
    <div>
      <div className="card bg-base-100  shadow-xl">
        <figure className="px-5 pt-10 ">
          <img
            src={image}
            alt="Shoes"
            className="h-48 rounded-xl "
          />
        </figure>
        <div className="card-body text-start h-48">
          <Link to={`userDetails/${id}`}><h2 className="card-title">{firstName }  {lastName }</h2></Link>
          <p>{email}</p>
          <div className="card-actions flex-col">
          <h2>Company: {user?.company?.name} </h2>
           <p>Address: {user?.address.address},{user?.address?.city} </p>
           
          </div>
        </div>
  </div>

    </div>
  );
};

export default UserCard;