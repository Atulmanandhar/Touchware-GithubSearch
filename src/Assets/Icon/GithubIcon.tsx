import { ReactComponent as GithubImage } from "../svg/github.svg";

export const githubIconStyle = {
  height: 50,
  width: 50,
};

export const GithubIcon = () => {
  return <GithubImage style={githubIconStyle} />;
};
export default GithubIcon;
