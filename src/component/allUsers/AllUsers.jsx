import { useState } from "react";
import UserCard from "./UserCard";
import useUsersData from "../../Hooks/useUsersData";
import { CiSearch } from "react-icons/ci";

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
      <h2 className="mb-10 text-5xl text-center font-semibold">All Users</h2>
      <div className="mb-4 py-5 flex flex-col lg:flex-row justify-center items-center text-center">
        <div className="flex flex-row text-center justify-center items-center">
          <input
            type="text"
            placeholder="Search by name"
            value={searchName}
            onChange={handleSearchChange}
            className="px-4 py-3  border rounded-md rounded-r-none focus:outline-none focus:border-red-500"
          />
          <button className="btn mr-5 rounded-l-none border-none bg-red-600">
            
            <CiSearch className=" text-white text-xl"></CiSearch>
          </button>
        </div>
        <div>
          <select
            value={sortBy}
            onChange={handleSortChange}
            className="lg:ml-2 px-4 py-3 mt-3 lg:mt-0 border rounded-md focus:outline-none focus:border-red-500"
          >
            <option value="">Default</option>
            <option value="firstName">Name</option>
            <option value="email">Email</option>
            <option value="company">Company Name</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
        {sortedUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      <div className="text-center my-10">
        <h2 className="text-5xl font-semibold"> Create User Form</h2>
       
      </div>
    </div>
  );
};

export default AllUsers;
