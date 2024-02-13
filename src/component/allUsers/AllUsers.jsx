import { useState } from "react";
import UserCard from "./UserCard";
import { CiSearch } from "react-icons/ci";
import CreateUserForm from "../UserForm/CreateUserForm";
import useUsersData from "../../Hooks/useUsersData";
import toast from "react-hot-toast";

const AllUsers = () => {
  const [searchName, setSearchName] = useState("");
  const [sortBy, setSortBy] = useState("");

  const { allUsers, setAllUsers } = useUsersData();
  console.log(allUsers);

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

  const handleAddUser = async (event) => {
    event.preventDefault();
    const form = event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const image = form.image.value;
    const email = form.email.value;
    const address = {
      address: form.address.value,
      city: form.city.value,
    };

    const company = {
      name: form.companyName.value,
    };
    const user = { image, firstName, lastName, email, address, company };
    // console.log(user)

    fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setAllUsers((prevUsers) => [data, ...prevUsers]);
        toast.success("New User Added Successfully");
        form.reset();
      });
  };
  console.log(allUsers);

  return (
    <div className="py-10 container mx-auto">
      <div className="mb-4 mx-5 py-5 flex flex-col md:flex-row justify-between items-center text-center">
        <div className="flex flex-col md:flex-row justify-left ">
          {/* search field */}
          <div className="flex flex-row text-center justify-center items-center">
            <input
              type="text"
              placeholder="Search by name"
              value={searchName}
              onChange={handleSearchChange}
              className="px-4 py-[11px]  border rounded-md rounded-r-none focus:outline-none border-red-600"
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
              className="lg:ml-2 px-4 py-3 mt-3 md:mt-0 border rounded-md focus:outline-none border-red-600"
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
            className="btn font-normal rounded bg-transparent border-red-600 hover:bg-red-600 hover:text-white text-lg  px-5 mt-3 md:mt-0"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Create User
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box w-11/12 max-w-2xl -z-0 ">
              <form method="dialog">
                {/* close modal button */}
                <button className="btn btn-md btn-circle absolute right-2 top-4">
                  ✕
                </button>
              </form>
              <CreateUserForm handleAddUser={handleAddUser} />
            </div>
          </dialog>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
        {sortedUsers?.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default AllUsers;
