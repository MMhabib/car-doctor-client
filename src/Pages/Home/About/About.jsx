import React from "react";
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
  return (
    <div className=" min-h-screen">
      <div className="flex  flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
        <img
          src={person}
          class="w-[460px] h-[473px] rounded-lg "
        />
        <img
          src={parts}
          class="max-w-sm border-white border-8 rounded-lg absolute right-24 top-[225px] w-[332px] h-[327px]"
        />
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get More info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
