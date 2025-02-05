import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { title, img, price,_id } = service;

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className=" p-4">
        <img
          src={img}
          alt="Shoes"
          class="rounded-xl"
        />
      </figure>
      <div className="card-body  ">
        <h2 className="card-title text-2xl font-bold">{title}</h2>
        <h3>
          Price : ${price}
        </h3>
        <div className="card-actions">
          <Link to={`/checkout/${_id}`}>
          <button className="btn btn-primary">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
