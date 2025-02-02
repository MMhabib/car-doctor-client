import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import img6 from '../../../assets/images/banner/6.jpg';

const Banner = () => {
    return (
        
            <div className="carousel w-full h-[600px] rounded-lg mx-auto">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src={img1}
      class="w-full" />
      
    <div className="absolute h-full space-y-7  p-25 left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
      <div className='text-white w-1/3 space-y-7  '>
        <h2 className='text-6xl font-bold '>Affordable Price For Car Servicing</h2>
        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
      </div>
      <div>
      <button className="btn btn-outline btn-primary mr-6">Discover more</button>
      <button className="btn btn-outline btn-secondary">Latest</button>
      </div>
    </div>
    <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end space-x-2">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src={img2}
      class="w-full" />
       <div className="absolute h-full space-y-7  p-25 left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
      <div className='text-white w-1/3 space-y-7  '>
        <h2 className='text-6xl font-bold '>Affordable Price For Car Servicing</h2>
        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
      </div>
      <div>
      <button className="btn btn-outline btn-primary mr-6">Primary</button>
      <button className="btn btn-outline btn-secondary">Secondary</button>
      </div>
    </div>
    <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end space-x-2">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src={img3}
      class="w-full" />
       <div className="absolute h-full space-y-7  p-25 left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
      <div className='text-white w-1/3 space-y-7  '>
        <h2 className='text-6xl font-bold '>Affordable Price For Car Servicing</h2>
        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
      </div>
      <div>
      <button className="btn btn-outline btn-primary mr-6">Primary</button>
      <button className="btn btn-outline btn-secondary">Secondary</button>
      </div>
    </div>
    <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end space-x-2">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src={img4}
      class="w-full" />
       <div className="absolute h-full space-y-7  p-25 left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
      <div className='text-white w-1/3 space-y-7  '>
        <h2 className='text-6xl font-bold '>Affordable Price For Car Servicing</h2>
        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
      </div>
      <div>
      <button className="btn btn-outline btn-primary mr-6">Primary</button>
      <button className="btn btn-outline btn-secondary">Secondary</button>
      </div>
    </div>
    <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end space-x-2">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        
    );
};

export default Banner;