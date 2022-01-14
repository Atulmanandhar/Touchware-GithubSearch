import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Pages/Home";
import HomeDetail from "../Pages/HomeDetail";

const MainRoute = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:ownerName/:repoName" element={<HomeDetail />} />
          <Route
            path="*"
            element={<ErrorPage errorMessage="No route found" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MainRoute;
