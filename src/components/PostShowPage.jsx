/* eslint-disable react/prop-types */
import Navbar2 from "./Navbar2"
import Photo from "./Photo"


const PostShowPage = ({setShwRequest,setconfirm}) => {
  return (
    <div className="h-[92vh] w-fit sm:w-full gap-y-3  mt-2 rounded flex flex-col border  items-center overflow-scroll  ">
      <Navbar2 setShwRequest={setShwRequest} setconfirm={setconfirm}/>
      <Photo/>
      <Photo/>
      <Photo/>
      <Photo/>
    </div>
  )
}

export default PostShowPage
