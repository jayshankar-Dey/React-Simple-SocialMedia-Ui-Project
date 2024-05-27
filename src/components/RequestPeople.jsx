import { Button } from "@mui/material"


const RequestPeople = () => {
  return (
    <div className="flex gap-x-4 border-b p-1">
      <div className="h-14 w-14 p-1 rounded-full overflow-hidden flex items-center gap-x-5">
        <img src="https://pics.craiyon.com/2023-06-20/89f79a8dee744596981e7417b8a7ea1d.webp" alt=""  className="w-full h-full object-cover object-center rounded-full"/>
      </div>
      <div>
        <h1>Debashish Das</h1>
        <div className="flex gap-x-2">
            <button className="bg-gray-100 px-3 border border-gray-200 shadow rounded" >Delete</button>
            <Button variant="contained" size="small" >Conferm</Button>
        </div>
      </div>
    </div>
  )
}

export default RequestPeople
