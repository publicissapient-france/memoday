import {AppState} from '../type-defs';

export const getters = {
  userDetail: (state: AppState): any => state.userDetail,
    isLogged: (state: AppState): boolean => (state.userDetail !== null),
};
