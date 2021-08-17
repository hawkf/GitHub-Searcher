import { User, Repository } from '../type-const';

export const ActionType = {  
  LOAD_USER: 'data/loadUser',
  LOAD_CURRENT_USER_REPO: 'data/loadRepoInfo'
};


export const ActionGenerator = {  
  loadUser: (user: User) => ({
    type: ActionType.LOAD_USER,
    payload: user,
  }),

  loadRepoInfo: (repos: Repository[]) => ({
    type: ActionType.LOAD_CURRENT_USER_REPO,
    payload: repos
  })
};