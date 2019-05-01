import {AppState} from '../type-defs';

export const getters = {
    user: (state: AppState): firebase.User | null => state.user,
    isLogged: (state: AppState): boolean => (state.user !== null),
};
