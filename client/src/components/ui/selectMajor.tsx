import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectMajor = ({ value, onChange }: any) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger>
        <SelectValue placeholder="Major" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Comp Sci">Comp Sci</SelectItem>
        <SelectItem value="ECE">ECE</SelectItem>
        <SelectItem value="CS + Math">CS + Math</SelectItem>
        <SelectItem value="Math/Stats">Math/Stats</SelectItem>
        <SelectItem value="AI (grad)">AI (grad)</SelectItem>
        <SelectItem value="General Engr">General Engr</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectMajor;
