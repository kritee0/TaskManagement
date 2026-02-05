import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"
import useTask from "@/hook/useTask"


export function SelectDemo() {
  const[priority,setPriority]=useState("")
  const{setTaskData}=useTask()
  return (
    <Select  value={priority} onValueChange={setPriority} setTaskData={()=>(prev=>({...prev, priority:SelectValue}))}  >
      <SelectTrigger className="w-full max-w-32 text-white">
        <SelectValue placeholder="priority" className="text-white"  />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="">
          <SelectLabel>Priority</SelectLabel>
          <SelectItem value="high">High</SelectItem>
          <SelectItem value="medium">medium</SelectItem>
          <SelectItem value="low">Low</SelectItem>    
               
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
