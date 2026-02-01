import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-full max-w-32">
        <SelectValue placeholder="" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>select</SelectLabel>
          <SelectItem value="high">High</SelectItem>
          <SelectItem value="medium">medium</SelectItem>
          <SelectItem vlaue="low">Low</SelectItem>          
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
