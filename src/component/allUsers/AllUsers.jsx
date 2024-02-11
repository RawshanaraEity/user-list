
import { useState } from "react";
import UserCard from "./UserCard";
import useUsersData from "../../Hooks/useUsersData";
import { CiSearch } from "react-icons/ci";

const AllUsers = () => {
    const [searchName, setSearchName] = useState("");
    const [sortBy, setSortBy] = useState("");

    const allUsers = useUsersData();

    const filteredUsers = allUsers?.filter(user =>
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

    const handleSearchChange = e => {
        setSearchName(e.target.value);
    };

    const handleSortChange = e => {
        setSortBy(e.target.value);
    };

    return (
        <div className="py-10 text-center">
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search by name"
                   
                    value={searchName}
                    onChange={handleSearchChange}
                    className="px-4 py-2 text-lg border rounded-md rounded-r-none focus:outline-none focus:border-red-500"
                />
                <button className="btn mr-5 rounded-l-none bg-red-600" > <CiSearch className=" text-white font-bold"></CiSearch> </button>
                <select
                    value={sortBy}
                    onChange={handleSortChange}
                    className="ml-2 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                >
                    <option value="">Default</option>
                    <option value="firstName">Name</option>
                    <option value="email">Email</option>
                    <option value="company">Company Name</option>
                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
                {sortedUsers.map(user => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
};

export default AllUsers;


