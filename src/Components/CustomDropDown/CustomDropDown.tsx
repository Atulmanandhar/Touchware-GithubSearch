interface DropdownValues {
  value: string | number | readonly string[] | undefined;
}

export interface DropDownType extends DropdownValues {
  label: string;
}

interface Props extends DropdownValues {
  options?: DropDownType[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  name: string;
  width: number;
}

const CustomDropDown = ({ name, value, options, onChange, width }: Props) => {
  return (
    <select
      className="form-select"
      aria-label="Form select"
      onChange={onChange}
      style={{
        width,
      }}
      value={value}
      name={name}
    >
      {options?.map((item: DropDownType, index: number) => (
        <option key={`${index}`} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

CustomDropDown.defaultProps = {
  value: "",
  onChange: () => {},
  options: [
    {
      label: "1",
      value: 1,
    },
  ],
};

export default CustomDropDown;
