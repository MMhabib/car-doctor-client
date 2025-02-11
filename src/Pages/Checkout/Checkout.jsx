import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/Authprovider";
import Swal from "sweetalert2";

const Checkout = () => {

const handlebooking=event=>{
  event.preventDefault()

  const form = event.target;
  const name= form.name.value;
  const date=form.date.value ;
  const email =user?.email;
const due=form.due.value;

const booking={
  customer_name:name,
  email,
  date,
  service:title,
  service_id:_id,
  price:price,
  img

}
  fetch('http://localhost:5000/bookings',{
    method:'POST',
    headers:{
      'content-type':'application/json'
    },
    body: JSON.stringify(booking)
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data);
    if(data.insertedId){
      Swal.fire({
        title: "Booking Succesful",
        text: "You have booked a appointment succesfully",
        icon: "success"
      });
      form.reset();
      
    }
  })
}

  const service = useLoaderData();
  const { title, img,price,_id} = service;
  const {user}=useContext(AuthContext)
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
          <input type="email"  name="email" defaultValue={user?.email} className="input w-full input-bordered" required />
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
