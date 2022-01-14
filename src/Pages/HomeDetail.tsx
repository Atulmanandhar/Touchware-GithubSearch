import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { githubFetchHandler } from "../Api";
import {
  createRepoDetailsUrl,
  createRepoReadMeUrl,
} from "../Api/RepoDetailsApi";
import CustomLoader from "../Components/Loader/CustomLoader";
import RepositoryCard from "../Components/RepositoryCard/RepositoryCard";
import { RepositoryData, RepositoryModel } from "../Models/Repository.model";
import createDOMPurify from "dompurify";
import ErrorPage from "../Components/ErrorPage/ErrorPage";

const DOMPurify = createDOMPurify(window);

const HomeDetail = () => {
  const { ownerName = "", repoName = "" } = useParams();
  const [{ repoDataLoading, readmeDataLoading }, setLoading] = useState({
    repoDataLoading: false,
    readmeDataLoading: false,
  });
  const [error, setError] = useState("");
  const [readMeData, setReadmeData] = useState<any>();
  const [repoData, setRepoData] = useState<RepositoryData>();

  useEffect(() => {
    if (ownerName !== "" && repoName !== "") {
      setLoading({
        repoDataLoading: true,
        readmeDataLoading: true,
      });
      githubFetchHandler({
        url: createRepoDetailsUrl({ ownerName, repoName }),
        successCB: (data) => {
          setRepoData(new RepositoryModel(data));
        },
        failureCB: (err) => setError(err),
        finallyCB: () =>
          setLoading((prev) => ({ ...prev, repoDataLoading: false })),
      });
      githubFetchHandler({
        url: createRepoReadMeUrl({ ownerName, repoName }),
        successCB: (data) => setReadmeData(data),
        failureCB: (err) => setError(err),
        finallyCB: () =>
          setLoading((prev) => ({ ...prev, readmeDataLoading: false })),
        apiHeaders: {
          Accept: "application/vnd.github.html",
        },
      });
    }
  }, []);

  const renderContent = () => {
    if (error !== "") return <ErrorPage errorMessage={error} />;
    return (
      <div>
        {repoDataLoading ? (
          <CustomLoader />
        ) : (
          repoData && <RepositoryCard data={repoData} />
        )}
        {readmeDataLoading ? (
          <CustomLoader />
        ) : (
          readMeData && (
            <div
              className="shadow p-3 mb-5 bg-body rounded overflow-hidden"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(readMeData),
              }}
            ></div>
          )
        )}
      </div>
    );
  };

  return <div className="mt-3">{renderContent()}</div>;
};

export default HomeDetail;
