import { Button_Type } from "../../Interfaces/common";

interface Props {
  title: string;
  buttonType: Button_Type;
  loading: boolean;
  onClick: () => void;
}

const CustomButton = ({ title, buttonType, loading, onClick }: Props) => {
  let buttonStyleClass = "btn-primary-alt";
  switch (buttonType) {
    case "primary":
      buttonStyleClass = "btn-primary-alt";
      break;
    case "secondary":
      buttonStyleClass = "btn-secondary";
      break;
    case "warning":
      buttonStyleClass = "btn-warning";
      break;
    default:
      buttonStyleClass = "btn-primary-alt";
      break;
  }
  return (
    <div>
      <button
        type="button"
        className={`btn ${buttonStyleClass}`}
        onClick={onClick}
        disabled={loading}
      >
        {title}
      </button>
    </div>
  );
};

CustomButton.defaultProps = {
  title: "Button Text",
  buttonType: "primary",
  loading: false,
  onClick: () => {},
};

export default CustomButton;
