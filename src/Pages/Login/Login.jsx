import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../provider/Authprovider';
import toast, { Toaster } from 'react-hot-toast';


const Login = () => {
    
    const{signinwithemail}=useContext(AuthContext);

    const handleLogin=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);
        signinwithemail(email,password)
        .then(result=>{
          toast.success('Log in seccesfully!');
        })
        .catch(error=>{
          toast.error(error.message)
        })
    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className=" w-1/2 flex ">
          
          <img src={img} alt="" />
        </div>
        <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
        <h1 className="text-5xl font-bold">Login now!</h1>
          <form onSubmit={handleLogin} className="card-body">
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
                placeholder="password"
                name='password'
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
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className='text-center'>New here? please <Link to={'/signup'} className='text-orange-600 font-bold'>Signup</Link></p>
          <Toaster />
        </div>
      </div>
    </div>
  );
};

export default Login;
