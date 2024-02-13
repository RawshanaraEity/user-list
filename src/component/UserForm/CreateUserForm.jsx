import toast from "react-hot-toast";
import useUsersData from "../../Hooks/useUsersData";

const CreateUserForm = () => {

    const allUsers = useUsersData()

    const handleAddUser = event =>{
        event.preventDefault();
        const form = event.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const image = form.image.value;
        const email = form.email.value;
        const address = {
        address: form.address.value,
        city: form.city.value,
        }
       
        const company = {
            name: form.companyName.value
        }
        const user = {image, firstName, lastName, email, address, company}
        // console.log(user)
    
        fetch('https://dummyjson.com/users/add', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>  [...allUsers].push(data) )
        toast.success("New User Added Successfully")
            form.reset()
            
      }
      console.log(allUsers);


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