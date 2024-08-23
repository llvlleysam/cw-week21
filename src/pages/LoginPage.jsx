import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../Redux/Courses.slice/Courses.slice";

export default function LoginPage() {
    const dispatch = useDispatch()
    function handelSubmitLogin(e){
        e.preventDefault()
        const phone = e.target["phone"].value
        const password = e.target["password"].value
        const newUser = {phone,password}
        dispatch(login(newUser))
    }


  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl">LOGIN</h1>
      <form onSubmit={handelSubmitLogin} className="bg-gray-300 flex flex-col p-8 gap-8" action="">
        <label className="flex flex-col" htmlFor="">
          <span>Phone Number :</span>
          <input className="py-2 rounded-lg" id="phone" type="text" />
        </label>
        <label className="flex flex-col" htmlFor="">
          <span>Password :</span>
          <input className="py-2 rounded-lg" id="password" type="password" />
        </label>
        <input
          className="bg-slate-100 rounded-lg py-2"
          type="submit"
          value={"Login"}
        />
      </form>
    </div>
  );
}
