import React from "react";
import StarIcon from "../../Assets/Icon/StarIcon";
import { commaSeperator } from "../../Utils/commaSeperator";

interface Props {
  icon?: React.ReactNode;
  value: number;
  title: string;
}

const IconWithNumber = ({ icon, value, title }: Props) => {
  return (
    <div className="d-flex align-items-center gap-1 ms-3" title={title}>
      {icon}
      {commaSeperator(value)}
    </div>
  );
};

export default IconWithNumber;
