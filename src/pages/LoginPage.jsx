import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../Redux/Courses.slice/Courses.slice";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";

export default function LoginPage() {
    const dispatch = useDispatch()
    function handelSubmitLogin(e){
        e.preventDefault()
        const phone = e.target["phone"].value
        const password = e.target["password"].value
        const newUser = {phone,password}
        dispatch(login(newUser))
        console.log(newUser);
        
    }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl">LOGIN</h1>
      <form onSubmit={handelSubmitLogin} className="bg-gray-300 flex flex-col p-8 gap-8" action="">
          <TextField className="bg-white rounded-md" id="phone" label="Phone Number" variant="outlined" />
          <TextField className="bg-white rounded-md" id="password" label="Password" variant="outlined" />
        <Button type="submit" variant="contained">Login</Button>
      </form>
    </div>
  );
}



