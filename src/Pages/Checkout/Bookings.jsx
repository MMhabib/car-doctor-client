import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/Authprovider";
import BookingTable from "./BookingTable";


const Bookings = () => {
const{user}=useContext(AuthContext)
const [bookings,setBookings]=useState([])
const url=(`http://localhost:5000/bookings?email=${user.email}`)
useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(data=>setBookings(data))
},[])

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
      </tr>
    </thead>
    <tbody>
      {
        bookings.map(booking=><BookingTable booking={booking}></BookingTable>)
      }
     
      
   </tbody>
  </table>
</div>
    );
};

export default Bookings;