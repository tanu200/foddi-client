import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from "react-icons/fa";
import { FaFacebook,FaGithub  } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Modal from './Modal';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';

const Signup = () => {
  const{signUpGoogle,createUser}=useContext(AuthContext);
   //home page spacification
   const location= useLocation();
   const navigate=useNavigate();
   const from=location.state?.from?.pathname || '/';
    const {
        register,
        handleSubmit,
       
        formState: { errors },
      } = useForm()
      const onSubmit= (data) => {
        const email= data.email;
        const password=data.password;
        // console.log(email,password) ;
        createUser(email,password)
        .then(res =>{
          const user=res.user;
          toast.success('Successfully Create User!');
          document.getElementById('my_modal_3').close()
          navigate(from,{replace:true})
          

        })
        .catch(error=>{
          console.log(error)
        })
      }
    return (
       <div>
     <div className="modal-box w-1/2 mx-auto my-16">
            <h1 className='text-xl font-bold mx-7'>Create An Account </h1>

          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
          </form>
          <form  onSubmit={handleSubmit(onSubmit)} className="card-body">

            {/* email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"
           placeholder="email"
             {...register("email")} 
             className="input input-bordered" required />
        </div>
        {/* password */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password"
           placeholder="password"
            className="input input-bordered"
             required  {...register("password")} />
          <label className="label" >
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type='submit' value='Signup' className="btn bg-green text-white"/>
        </div>
      </form>
       {/*error text */}


      {/* login button */}
      <p className='text-center my-2'>Already Have An Account? <button   onClick={()=>document.getElementById('my_modal_3').showModal()} 
      
      className='text-green underline ml-2 font-semibold'>Login </button> Now</p>

          {/*social media sign in */}

      <div className='space-x-3 text-center my-7'>
      <button className="btn btn-circle hover:bg-green hover:text-white"><FaGoogle></FaGoogle>
</button>
      <button className="btn btn-circle hover:bg-green hover:text-white"><FaFacebook></FaFacebook>
</button>
      <button className="btn btn-circle hover:bg-green hover:text-white"><FaGithub></FaGithub>
</button>
      </div>
        </div>
        <Modal></Modal>
       </div>
    );
};

export default Signup;