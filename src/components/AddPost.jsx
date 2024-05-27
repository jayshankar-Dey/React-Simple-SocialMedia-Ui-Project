import { Button, TextField } from "@mui/material"

// eslint-disable-next-line no-unused-vars, react/prop-types
const AddPost = ({setOpen}) => {
  return (
    <div className="lg:w-[600px] h-96 relative flex flex-col gap-y-4 justify-center p-5 ">
      <button onClick={setOpen} className="absolute top-2 right-2 text-2xl text-red-300" ><ion-icon name="close-outline"></ion-icon></button>

      <TextField label="title" variant="filled"/>
      <TextField type="file" variant="filled"/>
      
      <Button variant="contained">Uplode</Button>
   
    </div>
  )
}

export default AddPost
