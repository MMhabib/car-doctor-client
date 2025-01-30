import React from "react";

const ServiceCard = ({ service }) => {
  const { title, img, price } = service;

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
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
