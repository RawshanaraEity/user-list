import { useState } from "react";
import UserCard from "./UserCard";
import useUsersData from "../../Hooks/useUsersData";
import { CiSearch } from "react-icons/ci";
import CreateUserForm from "../UserForm/CreateUserForm";

const AllUsers = () => {
  const [searchName, setSearchName] = useState("");
  const [sortBy, setSortBy] = useState("");

  const allUsers = useUsersData();

  const filteredUsers = allUsers?.filter((user) =>
    user?.firstName?.toLowerCase().includes(searchName.toLowerCase())
  );

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortBy === "firstName") {
      return a.firstName.localeCompare(b.firstName);
    } else if (sortBy === "email") {
      return a.email.localeCompare(b.email);
    } else if (sortBy === "company") {
      return a.company.name.localeCompare(b.company.name);
    }
    return 0;
  });

  const handleSearchChange = (e) => {
    setSearchName(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

 

  return (
    <div className="py-10">
      <div className="mb-4 mx-5 py-5 flex flex-col md:flex-row justify-between items-center text-center">
        <div className="flex flex-col md:flex-row justify-left ">
            {/* search field */}
        <div className="flex flex-row text-center justify-center items-center">
          <input
            type="text"
            placeholder="Search by name"
            value={searchName}
            onChange={handleSearchChange}
            className="px-4 py-[11px]  border rounded-md rounded-r-none focus:outline-none focus:border-red-500"
          />
          <button className="btn mr-5 rounded-l-none outline-none border-none bg-red-600">
            
            <CiSearch className=" text-white text-xl"></CiSearch>
          </button>
        </div>
        {/* select field */}
        <div>
          <select
            value={sortBy}
            onChange={handleSortChange}
            className="lg:ml-2 px-4 py-3 mt-3 md:mt-0 border rounded-md focus:outline-none focus:border-red-500"
          >
            <option value="">Default</option>
            <option value="firstName">Name</option>
            <option value="email">Email</option>
            <option value="company">Company Name</option>
          </select>
        </div>
        </div>
        {/* create user form */}
        <div>
        <button
            className="btn rounded bg-transparent border-red-600 text-lg  px-5 mt-3 md:mt-0"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
           Create User
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box w-11/12 max-w-2xl -z-0 p-10">
              <form method="dialog">
                {/* close modal button */}
                <button className="btn btn-lg btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <CreateUserForm></CreateUserForm>
            </div>
          </dialog>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
        {sortedUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default AllUsers;
