import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../provider/Authprovider';


const Signup = () => {
const{createUser,signinwithgoogle}=useContext(AuthContext);

    const handleSignup=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        const name=form.name.value;
        console.log(email,password,name);
        createUser(email,password)
        .then(result=>{
          console.log(result.user);
        })
        .catch(error=>{
          console.error(error)
        })
     
    }
    const handlegooglesignin=()=>{
      signinwithgoogle()
      .then(result=>{
        console.log(result.user);
      })
      .catch(error=>{
        console.error(error)
      })
    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className=" w-1/2 flex ">
          
          <img src={img} alt="" />
        </div>
        <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
        <h1 className="text-5xl font-bold">Sign up</h1>
          <form onSubmit={handleSignup} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name='name'
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name='email'
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name='password'
                placeholder=" confirm password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign up</button>
              <button onClick={handlegooglesignin} className="btn btn-primary">Sign google up</button>
            </div>
          </form>
          <p className='text-center'>Alreadey have an account please <Link to={'/login'} className='text-orange-600 font-bold'>Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;