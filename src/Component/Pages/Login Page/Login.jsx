//importing component
import "../../../index.css";
import {AiFillFacebook,AiFillGoogleCircle,AiFillLinkedin} from  "react-icons/ai"
import {Link} from "react-router-dom"

const Login = () => {
  return (
    <div className="container mx-auto lg:px-[10rem] sm:px-[2rem] lg:p-[0px] px-[2rem] bg-zinc-200 h-screen">
      <div className= " lg:items-center h-[inherit] lg:justify-center lg:grid grid-cols-3 sm:block">
        <div className="lg:col-span-2 sm:col-span-3">
          <h1 className="text-6xl font-bold mb-3 mt-[20px] lg:mt-[0px]">facebook</h1>
          <p className="text-3xl font-normal mb-[20px] lg:mb-[0px]">Facebook helps you connect and share with the people in your life.</p>
        </div>
        <div className="bg-white p-6 flex justify-center  flex-col rounded-lg">
          <form className="" >
            <div>
              <p className="font-semibold text-2xl tracking-wide text-center">LOGIN</p>
            </div>
            <div className="mb-5">
              <p className="text-zinc-600  font-semibold ">Email</p>
              <input
                className="outline-none h-10 px-5  border border-sm w-full "
                type="text"
                placeholder="Email"
                requierd
              />
            </div>
            <div className="mb-5" >
              <p className="text-zinc-600  font-semibold ">Password</p>
              <input
                className="outline-none h-10 px-5  border border-sm w-full "
                type="password"
                placeholder="Password"
                requierd
              />
            </div>
            <div className="flex gap-5 my-4" >
                <input type="checkbox" />
                <p>Remember me ?</p>
            </div>
            <div className="" >
                <button className="bg-red-400  h-10 rounded-full  w-full text-white font-semibold  hover:bg-red-600 duration-300 "  >LOGIN</button>
                <p className="text-end" >Forgot Password</p>
            </div>
            <p className="flex justify-center font-bold mb-2" >OR</p>
            <div className="flex flex-row justify-center gap-10 text-3xl" >
                <AiFillFacebook className="rounded-full text-blue-600 " />
                <AiFillGoogleCircle className="rounded-full  text-red-600 " />
                <AiFillLinkedin className="rounded-fullc  text-blue-600 " />
            </div>
            <div>
                <p className="text-center mt-2">Need an Account <span className="text-red-900 underline"><Link to='/SignUp' >SignUp</Link></span> </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
