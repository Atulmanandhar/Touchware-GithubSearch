import { useNavigate } from "react-router-dom";
import GithubCatImage from "../../Assets/Icon/GithubCatImage";

interface Props {
  errorMessage: string;
}

const ErrorPage = ({ errorMessage }: Props) => {
  const navigate = useNavigate();
  return (
    <div className="full-screen d-flex flex-column justify-content-center align-items-center">
      <GithubCatImage />
      <h6>{errorMessage}</h6>
      <h4 className="cursor-pointer" onClick={() => navigate("/")}>
        Take me Home
      </h4>
    </div>
  );
};

export default ErrorPage;
