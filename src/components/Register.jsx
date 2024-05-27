/* eslint-disable no-unused-vars */
import { Button, Input, Typography } from "@material-tailwind/react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useFormik } from 'formik';
import { RegisterSchema } from "../validation/RegisterValidation";

const Register = () => {
const [error,setError]=useState("")
    const {handleSubmit,handleChange,touched,errors} = useFormik({
        initialValues: {
          name:'',
          email: '',
          password: '',
          cnfpassword: '',
        },
        validationSchema:RegisterSchema,
        onSubmit: values => {
            console.log(values)
        },
      });
    
  return (
    <div className="h-screen w-full flex justify-center items-center bg-blue-gray-50">

      <form onSubmit={handleSubmit}  className="flex flex-col gap-y-3 w-80 bg-white p-3 rounded-md border shadow-md">
     {error&& <div className="w-full p-3 my-2 bg-red-50 text-red-500 text-sm rounded-md">
            <h1><ion-icon name="alert-outline"></ion-icon>{error}</h1>
        </div>
}
        <Input label="Enter Name" name="name" onChange={handleChange} />
        <Typography className="text-sm text-red-400">{errors.name && touched.name&&errors.name}</Typography>

        <Input label="Enter Email" type="email" name="email" onChange={handleChange}/>
        <Typography className="text-sm text-red-400">{errors.email && touched.email&&errors.email}</Typography>

        <Input label="Enter Password" type="password" name="passwors" onChange={handleChange}  />
        <Typography className="text-sm text-red-400">{errors.password || touched.password&&errors.password}</Typography>

        <Input label="Enter CnfPassword" type="password" name="cnfpassword" onChange={handleChange}  />
        <Typography className="text-sm text-red-400">{errors.cnfpassword || touched.cnfpassword&&errors.cnfpassword}</Typography>
        
        <div className="flex justify-between items-center">
        <Link  to={'/login'} className="text-sm "> have any account <span className="text-blue-500 underline">Login</span></Link>
        <Button variant="outlined"  size="sm" className="float-right" type="submit">Register</Button>
        </div>
      </form>
    </div>
  )
}

export default Register
