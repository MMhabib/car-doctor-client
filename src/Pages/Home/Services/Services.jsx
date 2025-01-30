import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
const[services,setServices]=useState([]);
useEffect(()=>{
    fetch('services.json')
    .then(res=>res.json())
    .then(data=>setServices(data))
},[])

    return (
       <div className="space-y-5">
         <div className="text-center space-y-5">
            <h3 className="text-[#FF3811] font-bold text-xl">Service</h3>
            <h1 className="font-bold text-5xl">Our Service area</h1>
            <p className="text-base font-light">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{
    services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
}
        </div>
       </div>
    );
};

export default Services;