/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import RequestPeople from "./RequestPeople"


const RequestsShowPage = ({confirm,setconfirm}) => {
  return (
    <div className={`h-[92vh] ${confirm?" absolute  top-0 bottom-0 flex bg-white  right-0 w-full z-20":"hidden"} md:flex  mt-2 rounded  w-[37%]   items-center flex-col gap-y-4 pt-2`}>
      <div className="relative text-2xl  w-full md:hidden">
        <button onClick={setconfirm} className="absolute right-2 text-red-300 top-0"><ion-icon name="close-outline"></ion-icon></button>
      </div>
      <RequestPeople/>
      <RequestPeople/>
      <RequestPeople/>
      <RequestPeople/>
      <RequestPeople/>
      <RequestPeople/>
      <RequestPeople/>
      
    </div>
  )
}

export default RequestsShowPage
