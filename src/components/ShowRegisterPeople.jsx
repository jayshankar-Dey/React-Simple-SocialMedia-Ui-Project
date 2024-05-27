import { Button } from "@mui/material"


const ShowRegisterPeople = () => {
  return (
    <div className="flex flex-wrap gap-x-7 text-sm font-semibold items-center">
      <div className="h-10 w-10 lg:w-14 lg:h-14 p-1 border rounded-full bg-black overflow-hidden ">
        <img src="https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/e76d4296-43f3-493b-9d50-f8e5c142d06c/2117667014/boys-profile-picture-screenshot.png" alt=""  className="object-cover object-center"/>
      </div>
      <div>
        <h1>Jayshankar</h1>
        <div className="mt-2">
            <Button variant="contained" size="small"  ><span className="text-[12px]">Add friend</span></Button>
        </div>
      </div>
    </div>
  )
}

export default ShowRegisterPeople
