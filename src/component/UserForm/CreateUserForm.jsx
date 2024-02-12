import toast from "react-hot-toast";

const CreateUserForm = () => {

    const handleAddUser = event =>{
        event.preventDefault();
        const form = event.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const image = form.image.value;
        const email = form.email.value;
        const address = form.address.value;
        const companyName = form.companyName.value;
        const user = {image, firstName, lastName, email, address, companyName}
        // console.log(user)
    
        fetch('https://dummyjson.com/user/post', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(user)
        })
        .then(res => res.json())
        toast.success("New User Added Successfully")
            form.reset()
            
      }


    return (
        <div>
             <h2 className="text-2xl md:text-3xl mb-5 rounded-md font-semibold"> Create User</h2>
        <form
       onSubmit={handleAddUser}
        className="max-w-xl p-5 mx-5 rounded-md md:mx-auto space-y-4"
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
          placeholder="Address(Street, Suite, City)"
          name="address"
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