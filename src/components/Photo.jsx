import { useState } from "react"
import CommentPeople from "./CommentPeople"



const Photo = () => {
  const[showComment,setShowAllComment]=useState(false)
  return (
    <div className="bg-white p-2 rounded shadow  w-full md:w-fit" >

        <div className="w-full h-80 border flex items-center justify-center ">
            <img src="https://images.pexels.com/photos/620337/pexels-photo-620337.jpeg?cs=srgb&dl=pexels-pripicart-620337.jpg&fm=jpg" alt=""  className="object-cover object-center w-full h-full "/>
        </div>
        <div className="text-sm text-gray-600 my-1">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, deserunt?</p>
        </div>
        <div className="text-2xl flex gap-x-3 pt-4">
            <button><ion-icon name="heart-outline"></ion-icon></button>
            <button><ion-icon name="chatbubble-outline"></ion-icon></button>
        </div>
        <div  className="flex items-center gap-x-4  pt-3">
            <input type="text" className="bg-gray-100 rounded-full p-2" placeholder="Comment.." />
            <button className="text-3xl  flex text-center text-gray-500"><ion-icon name="send"></ion-icon></button>
        </div>
          <div className="p-2 text-sm cursor-pointer my-3 w-96" onClick={()=>setShowAllComment(!showComment)}>
            <h3><ion-icon name="eye"></ion-icon> See All Coments..</h3>
          </div>
        <div className={`flex flex-col gap-y-1 mt-2 overflow-hidden ${showComment?"h-fit":" h-32"}`}>
            <CommentPeople/>
            <CommentPeople/>
            <CommentPeople/>
        </div>
     
    </div>
  )
}

export default Photo
