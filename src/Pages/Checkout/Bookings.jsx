import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/Authprovider";
import BookingTable from "./BookingTable";
import Swal from "sweetalert2";


const Bookings = () => {
const{user}=useContext(AuthContext)
const [bookings,setBookings]=useState([])
const url=(`http://localhost:5000/bookings?email=${user.email}`)
useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(data=>setBookings(data))
},[])

const handlebookingdelte = (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your booking has been deleted.",
              icon: "success",

              

            });
            const remainings= bookings.filter(booking=>booking._id !==id)
            setBookings(remainings)
          }
        })
        .catch((error) => {
          console.error("Error deleting booking:", error);
          Swal.fire({
            title: "Error!",
            text: "Failed to delete the booking.",
            icon: "error",
          });
        });
    }
  });
};
const handeleConfirmBooking=(id)=>{

  fetch(`http://localhost:5000/bookings/${id}`,{
    method:'PATCH',
    headers:{
      'content-type':'application.json'
    },
    body:JSON.stringify({status:'confirm'})
  })
  .then(res=>res.json())
  .then(data=>{
    if(data.modifiedCount > 0   ){

const remaining= bookings.filter(booking=>booking._id !== id)
const updated= bookings.find(booking=>booking._id === id)
updated.status='confirm'
const updatedbookings=[updated,...remaining]
setBookings(updatedbookings)
    }


  })
}

    return (
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Service</th>
        <th>Price</th>
        <th>Date</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {
        bookings.map(booking=><BookingTable booking={booking} key={booking._id} handeleConfirmBooking={handeleConfirmBooking} handlebookingdelte={handlebookingdelte}></BookingTable>)
      }
     
      
   </tbody>
  </table>
</div>
    );
};

export default Bookings;