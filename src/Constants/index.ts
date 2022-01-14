import { DropDownType } from "../Components/CustomDropDown/CustomDropDown";

export const PAGE_SORT_OPTIONS: DropDownType[] = [
  { label: "Stars (Highest)", value: "stars-desc" },
  { label: "Stars (Lowest)", value: "stars-asc" },
  { label: "Updated (Asc)", value: "updated-asc" },
  { label: "Updated (Desc)", value: "updated-desc" },
  { label: "Forks (Highest)", value: "forks-dsc" },
  { label: "Forks (Lowest)", value: "forks-asc" },
];

export const PAGE_LIMIT_OPTIONS: DropDownType[] = [
  { label: "10", value: 10 },
  { label: "25", value: 25 },
  { label: "50", value: 50 },
];
