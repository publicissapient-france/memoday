import {AppState} from '../type-defs';

export const getters = {
    value: (state: AppState): number => state.value,
    user: (state: AppState): any => state.user,
    isLogged: (state: AppState): boolean => (state.user !== null),
};
