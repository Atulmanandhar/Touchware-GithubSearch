import { SEARCH_REPO_API } from "./urls";

export interface Search_Repo {
  repoName: string;
  pageNumber: number;
  limitPerPage: number;
  sort: string;
}

export const createSearchRepoUrl = ({
  repoName,
  pageNumber = 1,
  limitPerPage = 10,
  sort,
}: Search_Repo) =>
  `${SEARCH_REPO_API}?q=${repoName}in:name+sort:${sort}&page=${pageNumber}&per_page=${limitPerPage}`;
