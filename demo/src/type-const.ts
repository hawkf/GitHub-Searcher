export interface User {
  login: string,
  name: string,
  avatar_url: string,
  public_repos: string,
  email: string,
  location: string,
  created_at: string,
  followers: string,
  following: string  
}

export interface Repository {
  name: string,
  forks_count: number,
  stargazers_count: number,
  html_url: string,
  owner: {
    login: string
  }
}