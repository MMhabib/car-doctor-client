import Swal from "sweetalert2";

const BookingTable = ({ booking ,handlebookingdelte,handeleConfirmBooking}) => {
  const { _id, customer_name, email, date, service, service_id, price, img,status } = booking;

 

  return (
    <tr>
      <th>
        <button onClick={() => handlebookingdelte(_id)} className="btn btn-xs btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{customer_name}</div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td>
        {service}
        <br />
        <span className="badge badge-ghost badge-sm"></span>
      </td>
      <td>{price}</td>
      <th>
        <button className="btn btn-ghost btn-xs">{date}</button>
      </th>
      <th>
        {  status ==='confirm' ? <span className="text-sm font-bold text-blue-700">Confirmed</span> :
          
          <button onClick={() => handeleConfirmBooking(_id)} className="btn btn-ghost ">Confirm</button>}
      </th>
    </tr>
  );
};

export default BookingTable;
