import { useCallback, useEffect, useState } from "react";
import { githubFetchHandler } from "../Api";
import CustomButton from "../Components/Button/CustomButton";
import CustomDropDown from "../Components/CustomDropDown/CustomDropDown";
import CustomLoader from "../Components/Loader/CustomLoader";
import CustomPagination from "../Components/Paginate/CustomPagination";
import RepositoryCard from "../Components/RepositoryCard/RepositoryCard";
import CustomTextInput from "../Components/Search/CustomTextInput";
import { RepositoryData, RepositoryModel } from "../Models/Repository.model";
import { PAGE_LIMIT_OPTIONS, PAGE_SORT_OPTIONS } from "../Constants";
import { createSearchRepoUrl } from "../Api/SearchRepoApi";
import GithubIcon from "../Assets/Icon/GithubIcon";
import GithubCatImage from "../Assets/Icon/GithubCatImage";
const fixedOffsetHeight = { height: 70 };
const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [repoData, setRepoData] = useState<RepositoryData[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [{ limit, sort }, setFilters] = useState({
    limit: 10,
    sort: PAGE_SORT_OPTIONS[0].value as string,
  });

  const onPageChange = (pageNo: number) => setCurrentPage(pageNo);

  const searchHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchText(e.target.value);
    },
    []
  );
  const selectHandler = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setFilters((prev) => ({
        limit: prev.limit,
        sort: prev.sort,
        [e.target.name]: e.target.value,
      }));
    },
    []
  );

  const fetchData = async (isFirstTimeSearch: boolean) => {
    if (searchText === "") return;
    setIsLoading(true);
    setError("");
    if (isFirstTimeSearch) {
      setCurrentPage(1);
      setTotalPages(0);
    }
    const repoUrl = createSearchRepoUrl({
      repoName: searchText,
      sort,
      pageNumber: isFirstTimeSearch ? 1 : currentPage,
      limitPerPage: limit,
    });
    githubFetchHandler({
      url: repoUrl,
      successCB: (payload: any) => {
        if (payload.items.length === 0) {
          setRepoData([]);
          setError(`Sorry. We couldnt get any results for ${searchText}`);
        } else {
          const formattedData = payload.items.map(
            (item: any) => new RepositoryModel(item)
          );
          setRepoData(formattedData);
          setTotalPages(payload.total_count ?? 0);
        }
      },
      failureCB: (error) => {
        setRepoData([]);
        setError(error);
      },
      finallyCB: () => setIsLoading(false),
    });
  };

  useEffect(() => {
    if (searchText !== "") {
      fetchData(false);
    }
  }, [currentPage]);

  const renderRepoContent = () => {
    if (repoData?.length > 0) {
      {
        return (
          <>
            {repoData.map((item: RepositoryData, index: number) => (
              <RepositoryCard data={item} key={item?.id ?? index} />
            ))}
            <CustomPagination
              currentLimit={limit}
              {...{ totalPages }}
              {...{ onPageChange }}
              {...{ currentPage }}
            />
          </>
        );
      }
    }
    if (error !== "") return <h6 className="text-center mt-5">{error}</h6>;
    return (
      <div className="d-flex justify-content-center align-items-center mt-5 flex-column">
        <GithubCatImage />
        <h6>Let's start searching</h6>
      </div>
    );
  };

  return (
    <div>
      <div className="d-flex w-100p justify-content-center gap-lg-5 gap-sm-3 align-items-center fixed-top py-3 px-5 bg-white shadow flex-wrap">
        <GithubIcon />
        <CustomTextInput
          onChange={searchHandler}
          value={searchText}
          onSubmit={fetchData.bind(this, true)}
          placeHolder="Search for a repository"
        />
        <CustomDropDown
          width={220}
          name="sort"
          value={sort}
          options={PAGE_SORT_OPTIONS}
          onChange={selectHandler}
        />
        <CustomDropDown
          width={100}
          name="limit"
          value={limit}
          options={PAGE_LIMIT_OPTIONS}
          onChange={selectHandler}
        />
        <CustomButton
          title="Search"
          onClick={fetchData.bind(this, true)}
          loading={isLoading}
        />
      </div>
      <div style={fixedOffsetHeight} className="mb-3" />
      {isLoading ? <CustomLoader /> : renderRepoContent()}
    </div>
  );
};

export default Home;
