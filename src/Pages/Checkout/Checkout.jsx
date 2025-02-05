import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const service = useLoaderData();
  const { title, facility } = service;
  return (
    <div>
      <h1>book now</h1>
      <h1>{title}</h1>
      <p>{facility[0].name}</p>
      <p>{facility[1].name}</p>
      
     
      <form className="card-body">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
       <div className="form-control ">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input w-full input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input w-full input-bordered" required />
          
        </div>
       <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input w-full input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input  w-full input-bordered" required />
          
        </div>
       </div>
        <div className="form-control mt-6 ">
          <button className="btn btn-primary w-full">Login</button>
        </div>
      </form>
    </div>
  
        
  );
};

export default Checkout;
