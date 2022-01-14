import { REPO_DETAILS_API } from "./urls";

export interface Repo_Details {
  ownerName: string;
  repoName: string;
}

export const createRepoDetailsUrl = ({ ownerName, repoName }: Repo_Details) =>
  `${REPO_DETAILS_API}/${ownerName}/${repoName}`;

export const createRepoReadMeUrl = ({ ownerName, repoName }: Repo_Details) =>
  `${REPO_DETAILS_API}/${ownerName}/${repoName}/readme`;
