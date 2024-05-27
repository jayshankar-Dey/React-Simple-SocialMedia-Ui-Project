/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import ShowRegisterPeople from "./ShowRegisterPeople"


const FollowPage = ({showRequest,setShwRequest}) => {
  return (
    <div className={`h-[92vh] ${showRequest?" absolute  top-0 bottom-0 flex bg-white  right-0 w-full z-20":"hidden"} lg:flex  mt-2 rounded  w-[37%]   items-center flex-col gap-y-4 pt-2`}>
      <div className="relative text-2xl  w-full lg:hidden">
        <button onClick={setShwRequest} className="absolute right-2 text-red-300 top-0"><ion-icon name="close-outline"></ion-icon></button>
      </div>
     <ShowRegisterPeople/>
     <ShowRegisterPeople/>
     <ShowRegisterPeople/>
     <ShowRegisterPeople/>
     <ShowRegisterPeople/>
     <ShowRegisterPeople/>
     <ShowRegisterPeople/>
     <ShowRegisterPeople/>
    </div>
  )
}

export default FollowPage
