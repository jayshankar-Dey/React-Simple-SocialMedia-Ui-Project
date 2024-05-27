
import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div className="bg-white w-full flex 
     shadow rounded md:justify-between md:flex-row flex-col p-2 gap-2 ">
      <div className="flex justify-between ">
      <Link to={"/profile"} className="flex gap-x-2 items-center">
      <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg" alt=""  className="h-10 rounded-full cursor-pointer"/>
      <h2>Jayshankar</h2>
      </Link>

      <div className="flex gap-x-3">
       
      </div>
      </div>
 
     <div className="flex md:w-[70%] justify-between">
     <div className="flex items-center justify-center p-1 gap-x-3 rounded-full w-96 bg-gray-100">
        <input type="text"  className="p-2 bg-transparent w-full outline-none" placeholder="Search..."/>
        <button className="px-2 text-xl"><ion-icon name="search"></ion-icon></button>
      </div>

      <ul className="*:text-2xl flex gap-x-6 *:cursor-pointer items-center">
        <Link to={"/"}><ion-icon name="home"></ion-icon></Link>
        <Link to={"/profile"}><ion-icon name="person-circle"></ion-icon></Link>
        <Link to={"/login"}><ion-icon name="log-in"></ion-icon></Link>
      </ul>
     </div>
    </div>
  )
}

export default Navbar
