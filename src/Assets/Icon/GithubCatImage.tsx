import { ReactComponent as CatImage } from "../svg/githubCat.svg";

export const catImageStyle = {
  height: 150,
  width: 150,
};

export const GithubCatImage = () => {
  return <CatImage style={catImageStyle} />;
};
export default GithubCatImage;
