import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

const interestsList = [
  "Career Development",
  "Learning New Skills",
  "Technical Workshops",
  "Employer Events",
  "Community Events",
  "Internship Advice",
  "Competitive Programming",
];

const PopoverInterests = ({ value, onChange }: any) => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>(
    value || []
  );

  const handleSelect = (interest: string) => {
    let updatedInterests;
    if (selectedInterests.includes(interest)) {
      // Remove the interest if it's already selected
      updatedInterests = selectedInterests.filter((i) => i !== interest);
    } else {
      // Add the interest if it's not selected
      updatedInterests = [...selectedInterests, interest];
    }
    setSelectedInterests(updatedInterests);
    onChange(updatedInterests); // Pass updated interests back to form state
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-full justify-between bg-zinc-800 h-auto overflow-y-auto"
        >
          <div className="flex flex-wrap gap-1 rounded-md">
            {selectedInterests.length === 0
              ? "Select your interests"
              : selectedInterests.map((interest) => (
                  <span
                    key={interest}
                    className="bg-orange-500 text-white px-2 py-1 rounded-md text-xs"
                  >
                    {interest}
                  </span>
                ))}
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div>
          {interestsList.map((interest) => (
            <div key={interest} className="grid grid-cols-2 items-center my-3">
              <label
                htmlFor={interest}
                className="text-sm font-medium capitalize justify-self-start whitespace-nowrap"
              >
                {interest}
              </label>
              <Checkbox
                className="justify-self-end"
                id={interest}
                checked={selectedInterests.includes(interest)}
                onCheckedChange={() => handleSelect(interest)}
              />
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PopoverInterests;
