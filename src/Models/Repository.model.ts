export interface RepositoryData {
  id: number;
  repo_name: string;
  owner_name: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  description: string;
  updated_at: string;
  html_url: string;
  open_issues_count: number;
  default_branch: string;
}

export class RepositoryModel {
  id: number = 0;
  repo_name: string = "";
  owner_name: string = "";
  stargazers_count: number = 0;
  watchers_count: number = 0;
  forks_count: number = 0;
  description: string = "";
  updated_at: string = "";
  html_url: string = "";
  open_issues_count = 0;
  default_branch: string = "";

  constructor(responseData: any) {
    this.id = responseData?.id ?? `${Math.random() * 1000}`;
    this.repo_name = responseData?.name ?? "";
    this.owner_name = responseData?.owner?.login ?? "";
    this.stargazers_count = responseData.stargazers_count ?? 0;
    this.watchers_count = responseData?.watchers_count ?? 0;
    this.forks_count = responseData?.forks_count ?? 0;
    this.description = responseData?.description ?? "No description";
    this.updated_at = responseData?.updated_at ?? "";
    this.html_url = responseData?.html_url ?? "https://github.com";
    this.open_issues_count = responseData?.open_issues_count ?? 0;
    this.default_branch = responseData?.default_branch ?? "N/A";
  }
}
