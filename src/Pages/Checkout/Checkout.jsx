import { useLoaderData } from "react-router-dom";

const Checkout = () => {

const handlebooking=event=>{
  event.preventDefault()

  const form = event.target;
  const name= form.name.value;
  const date=form.date.value ;
  const email =form.email.value;
const due=form.due.value;

console.log(name,due,email,date);
  
}

  const service = useLoaderData();
  const { title, facility ,price} = service;
  return (
    <div>
      <h1 >book now</h1>
      <h1 className="text-3xl text-center">{title}</h1>
      
      
     
      <form onSubmit={handlebooking} className="card-body">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
       <div className="form-control ">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" name="name" className="input w-full input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Appointment Date</span>
          </label>
          <input type="date" placeholder="Date"  name="date" className="input w-full input-bordered" required />
          
        </div>
       <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input w-full input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Due Amount</span>
          </label>
          <input type="text" name="due" defaultValue={'$'+price} className="input  w-full input-bordered" required />
          
        </div>
       </div>
        <div className="form-control mt-6 ">
          <input className="btn btn-primary w-full" type="submit" value="Book Now" />
        </div>
      </form>
    </div>
  
        
  );
};

export default Checkout;
