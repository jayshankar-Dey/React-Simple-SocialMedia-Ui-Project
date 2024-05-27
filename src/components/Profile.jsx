import { Button, Container, Dialog, ImageList, ImageListItem, TextField } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom"


const Profile = () => {
    const[open,setOpen]=useState(false)
  return (
    <Container>
       <div className=" pt-3">
         <Link to={"/"}><Button size="small" variant="outlined">Back</Button></Link>
        </div>   
      <div className=" mx-auto w-full md:w-[60%] mt-5 flex md:flex-row flex-col items-center gap-x-3 justify-between  ">
        
        <div className="h-32 w-32 rounded-full border p-1 relative">
            <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg" alt="" className="w-full h-full object-cover object-center rounded-full" />

            <button onClick={()=>setOpen(!open)}  title="eddit profile" className="absolute py-1 px-2 bg-white rounded-full top-16 -right-3 border shadow-md"><ion-icon name="create-outline"></ion-icon></button>
        </div>
        {/* //edit */}
        <Dialog open={open} onClose={()=>setOpen(!open)}>
            <div className="w-96 h-96 bg-white border shadow-lg flex flex-col gap-y-3 p-3">
                <div >
                    <button onClick={()=>setOpen(!open)} className="float-right text-red-300">X</button>
                </div>
                <TextField label='Eddit Name' focused/>
                <TextField label='Eddit des' focused/>
                <TextField type="file" label='Eddit Profile Pic' focused/>
                <img src="https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg" className="h-14 w-14 rounded-full" alt="" />
                <Button variant="outlined">Save Change</Button>
            </div>
        </Dialog>
        {/* //end eddit */}
        <div className="md:w-[80%] px-2">
            <h1 className="text-xl mt-4 font-semibold">Jayshankar Dey</h1>
            <p className="text-sm font-semibold text-gray-500"> sit amet consectetur adipisicing elit. Repudiandae, incidunt nesciunt? Porro a, ratione nulla molestiae repellendus assumenda earum beatae.</p>
            <div className="flex gap-x-3 m-2 mt-4 *:font-semibold">
                <button className=" p-2 ">friends(200)</button>
                <button className="p-2">Post(200)</button>
                <Button variant="contained" size="small">Add friend</Button>
            </div>
        </div>
      </div>


<div className="mx-auto w-fit mt-3 ">
    
      <ImageList className="w-96 h-[30rem] *:cursor-pointer" cols={3} rowHeight={164}>
  
    <ImageListItem >
      <img
        srcSet={`https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg?q=tbn:ANd9GcR6aQ32XjTXDMEP7qPdL4u1wnks7ORR3vVB9m4U1yhkJA&s?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        src={`https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg?q=tbn:ANd9GcR6aQ32XjTXDMEP7qPdL4u1wnks7ORR3vVB9m4U1yhkJA&s?w=164&h=164&fit=crop&auto=format`}
        alt=""
        loading="lazy"
      />
    </ImageListItem>

    <ImageListItem >
      <img
        srcSet={`https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg?q=tbn:ANd9GcR6aQ32XjTXDMEP7qPdL4u1wnks7ORR3vVB9m4U1yhkJA&s?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        src={`https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg?q=tbn:ANd9GcR6aQ32XjTXDMEP7qPdL4u1wnks7ORR3vVB9m4U1yhkJA&s?w=164&h=164&fit=crop&auto=format`}
        alt=""
        loading="lazy"
      />
    </ImageListItem>

    <ImageListItem >
      <img
        srcSet={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6aQ32XjTXDMEP7qPdL4u1wnks7ORR3vVB9m4U1yhkJA&s?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6aQ32XjTXDMEP7qPdL4u1wnks7ORR3vVB9m4U1yhkJA&s?w=164&h=164&fit=crop&auto=format`}
        alt=""
        loading="lazy"
      />
    </ImageListItem>

    <ImageListItem >
      <img
        srcSet={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6aQ32XjTXDMEP7qPdL4u1wnks7ORR3vVB9m4U1yhkJA&s?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6aQ32XjTXDMEP7qPdL4u1wnks7ORR3vVB9m4U1yhkJA&s?w=164&h=164&fit=crop&auto=format`}
        alt=""
        loading="lazy"
      />
    </ImageListItem>
    <ImageListItem >
      <img
        srcSet={`https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg?q=tbn:ANd9GcR6aQ32XjTXDMEP7qPdL4u1wnks7ORR3vVB9m4U1yhkJA&s?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        src={`https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg?q=tbn:ANd9GcR6aQ32XjTXDMEP7qPdL4u1wnks7ORR3vVB9m4U1yhkJA&s?w=164&h=164&fit=crop&auto=format`}
        alt=""
        loading="lazy"
      />
    </ImageListItem>

    <ImageListItem >
      <img
        srcSet={`https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg?q=tbn:ANd9GcR6aQ32XjTXDMEP7qPdL4u1wnks7ORR3vVB9m4U1yhkJA&s?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        src={`https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg?q=tbn:ANd9GcR6aQ32XjTXDMEP7qPdL4u1wnks7ORR3vVB9m4U1yhkJA&s?w=164&h=164&fit=crop&auto=format`}
        alt=""
        loading="lazy"
      />
    </ImageListItem>

    <ImageListItem >
      <img
        srcSet={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6aQ32XjTXDMEP7qPdL4u1wnks7ORR3vVB9m4U1yhkJA&s?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6aQ32XjTXDMEP7qPdL4u1wnks7ORR3vVB9m4U1yhkJA&s?w=164&h=164&fit=crop&auto=format`}
        alt=""
        loading="lazy"
      />
    </ImageListItem>

    <ImageListItem >
      <img
        srcSet={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6aQ32XjTXDMEP7qPdL4u1wnks7ORR3vVB9m4U1yhkJA&s?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6aQ32XjTXDMEP7qPdL4u1wnks7ORR3vVB9m4U1yhkJA&s?w=164&h=164&fit=crop&auto=format`}
        alt=""
        loading="lazy"
      />
    </ImageListItem>
 
</ImageList>

</div>
      {/* ///photos */}
    </Container>
  )
}

export default Profile
