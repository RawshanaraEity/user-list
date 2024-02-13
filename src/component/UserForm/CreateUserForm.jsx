

const CreateUserForm = ({handleAddUser}) => {

   
    return (
        <div>
             <h2 className="text-2xl md:text-3xl mb-5 rounded-md font-semibold"> Create User</h2>
        <form
       onSubmit={handleAddUser}
        className="max-w-xl  rounded-md md:mx-auto space-y-4"
      >
        <div className="flex gap-5">
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          className="input input-bordered rounded-md w-full"
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          className="input input-bordered rounded-md w-full"
          required
        />
        </div>
         <input
          type="url"
          placeholder="Image(URL)"
          name="image"
          className="input input-bordered rounded-md w-full"
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="input input-bordered rounded-md w-full"
          required
        />

        <input
          type="text"
          placeholder="Address"
          name="address"
          className="input input-bordered rounded-md w-full"
          required
        />
        <input
          type="text"
          placeholder="City"
          name="city"
          className="input input-bordered rounded-md w-full"
          required
        />
       
        <input
          type="text"
          placeholder="Company Name"
          name="companyName"
          className="input input-bordered rounded-md w-full"
          required
        />
       
        <input
          type="submit"
          className="btn rounded-md border-red-600 bg-transparent w-full hover:bg-red-600 hover:text-white"
          value="Add User"
        />
      </form>
        </div>
    );
};

export default CreateUserForm;