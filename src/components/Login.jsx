/* eslint-disable no-unused-vars */
import { Button, Input, Typography } from "@material-tailwind/react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useFormik } from 'formik';

const Login = () => {
    

    const {handleSubmit,handleChange,touched,errors} = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        onSubmit: values => {
          console.log(values)
        },
      });
    
  return (
    <div className="h-screen w-full flex justify-center items-center bg-blue-gray-50">

      <form onSubmit={handleSubmit}  className="flex flex-col gap-y-3 w-80 bg-white p-3 rounded-md border shadow-md">
      <div className="w-full p-3 my-2 bg-red-50 text-red-500 text-sm rounded-md">
            <h1><ion-icon name="alert-outline"></ion-icon>Email Doesnt Exiest</h1>
        </div>
        <Input label="Enter Email" type="email" onChange={handleChange} name="email" />
        <Typography className="text-sm text-red-400">Please enter valide email</Typography>
        <Input label="Enter Password" type="password"   onChange={handleChange} name="password" />
        <Typography className="text-sm text-red-400">Please enter valide password</Typography>
        <div className="flex justify-between items-center">
        <Link  to={'/register'} className="text-sm ">Dont have any account <span className="text-blue-500">Register</span></Link>
        <Button variant="outlined"  type="submit" size="sm" className="float-right">Login</Button>
        </div>
      </form>
    </div>
  )
}

export default Login
