import dayjs from "dayjs";
import { useLocation, useNavigate } from "react-router-dom";
import EyeIcon from "../../Assets/Icon/EyeIcon";
import ForkIcon from "../../Assets/Icon/ForkIcon";
import StarIcon from "../../Assets/Icon/StarIcon";
import WarningIcon from "../../Assets/Icon/WarningIcon";
import { RepositoryData } from "../../Models/Repository.model";
import IconWithNumber from "./IconWithNumber";

interface Props {
  data: RepositoryData;
}

const cardStyle = {
  minHeight: 140,
};

const RepositoryCard = ({ data }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isDetailPage = location.pathname.includes("detail");

  const navigationHandler = () => {
    if (isDetailPage) {
      window.open(data.html_url);
    } else {
      navigate(`/detail/${data.owner_name}/${data.repo_name}`);
    }
  };

  const IconWithNumberArr = [
    {
      title: "Total no. of stars",
      icon: <StarIcon />,
      value: data.stargazers_count,
    },
    {
      title: "Total no. of forks",
      icon: <ForkIcon />,
      value: data.forks_count,
    },
    {
      title: "Total no. of watchers",
      icon: <EyeIcon />,
      value: data.watchers_count,
    },
    {
      title: "Total no. of open issues",
      icon: <WarningIcon />,
      value: data.open_issues_count,
    },
  ];

  if (!isDetailPage) delete IconWithNumberArr[IconWithNumberArr.length - 1];

  return (
    <div
      className={`shadow p-3 mb-5 bg-body rounded overflow-hidden ${
        !isDetailPage && "repository-card cursor-pointer"
      }`}
      style={cardStyle}
      onClick={isDetailPage ? undefined : navigationHandler}
    >
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        <div>
          <div className="d-flex align-items-center gap-5">
            <h4
              className="cursor-pointer"
              onClick={isDetailPage ? navigationHandler : undefined}
            >
              {data.owner_name}/{data.repo_name}
            </h4>
          </div>

          <h6>
            <small className="text-muted">
              Last Updated: <i>{dayjs(data.updated_at).fromNow()}</i>
            </small>
          </h6>
        </div>
        <div className="d-flex flex-wrap gap-1">
          {IconWithNumberArr.map((item, index) => (
            <IconWithNumber
              key={index}
              icon={item.icon}
              value={item.value}
              title={item.title}
            />
          ))}
        </div>
      </div>
      {isDetailPage && <h6>Default Branch: {data.default_branch}</h6>}
      <p className="truncate-two-lines">{data.description}</p>
    </div>
  );
};

export default RepositoryCard;
