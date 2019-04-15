import {AppState} from '../type-defs';

export const getters = {
    user: (state: AppState): any => state.user,
    isLogged: (state: AppState): boolean => (state.user !== null),
};
