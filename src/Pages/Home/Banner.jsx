
const Banner = () => {
    return (
        <div>
             <div className="hero lg:h-[400px] bg-gradient-to-r from-cyan-50 to-blue-50 ...">
        <div  className="hero-content  flex-col-reverse md:flex-row-reverse justify-between">
          <div className="md:w-3/6 lg:w-2/6 ">
          <img  src="https://i.ibb.co/wg2yQWG/task-1.webp"/>
          </div>
          <div className="lg:w-3/5 mr-auto">
            <h1 className="text-5xl lg:text-5xl font-bold ">Welcome To Our Website</h1>
            <p className="py-6 text-lg text-gray-500 font-medium">Organize and manage your users smartly.</p>
          
           <button className="btn text-lg bg-transparent border-red-600">Let’s Explore</button>
          
          </div>
        </div>
      </div>
        </div>
    );
};

export default Banner;