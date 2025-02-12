import Swal from "sweetalert2";

const BookingTable = ({ booking }) => {
  const { _id, customer_name, email, date, service, service_id, price, img } = booking;

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
    </tr>
  );
};

export default BookingTable;
