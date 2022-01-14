interface Props {
  placeHolder?: string;
  inputType?: React.HTMLInputTypeAttribute;
  title?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

const CustomTextInput = ({
  inputType,
  title,
  placeHolder,
  value,
  onSubmit,
  onChange,
}: Props) => {
  return (
    <div className="">
      <div className="">
        <input
          type={inputType}
          className="form-control "
          id="floatingInput"
          placeholder={placeHolder}
          value={value}
          onChange={onChange}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") onSubmit();
          }}
        />
        {/* <label htmlFor="floatingInput">{title}</label> */}
      </div>
    </div>
  );
};

CustomTextInput.defaultProps = {
  title: "Search me",
  placeHolder: "default placeholder",
  inputType: "text",
  value: "",
  onSubmit: () => {},
};

export default CustomTextInput;
