import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { FaFacebook,FaGithub  } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';

const Modal = () => {
  const{signUpGoogle,logIn}=useContext(AuthContext);
  const[errorMessage, seterrorMessage]=useState('');
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
    console.log(email,password) ;
    logIn(email,password)
    .then(res=>{
      const user= res.user;
      toast.success('Successfully Log in!');
      document.getElementById('my_modal_3').close()
      navigate(from,{replace:true})
    })
    .catch(error=>{
      const errorMessage=error.message;
      seterrorMessage('provide a correct email and password')
    })
  }

 
  //google sing in
  const handleGoogleLog=()=>{
    signUpGoogle()
    .then(res=>{
      const user=res.user;
      toast.success('Successfully Log in!')
      navigate(from,{replace:true})
    })
    .catch(error=>{
      console.log(error)
    })

  }
    return (
        <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
            <h1 className='text-xl font-bold mx-7'>Please Login </h1>

          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
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
          <input type='submit' value='Login' className="btn bg-green text-white"/>
        </div>
      </form>
       {/*error text */}

       {
        errorMessage?<p className='text-red '>{errorMessage}</p>:""
       }

      {/* login button */}
      <p className='text-center my-2'>Dont Have An Account? <Link to='/signup' className='text-green underline ml-2 font-semibold'>Sign Up</Link> Now</p>

          {/*social media sign in */}

      <div className='space-x-3 text-center my-7'>
      <button onClick={handleGoogleLog}
      className="btn btn-circle hover:bg-green hover:text-white">
        <FaGoogle></FaGoogle>
</button>
      <button className="btn btn-circle hover:bg-green hover:text-white"><FaFacebook></FaFacebook>
</button>
      <button className="btn btn-circle hover:bg-green hover:text-white"><FaGithub></FaGithub>
</button>
      </div>
        </div>
       
      </dialog>
    );
};

export default Modal;