import {AppState, MutationTypes} from '../type-defs';

export const mutations = {
    [MutationTypes.SET_USER](state: AppState, user: firebase.User): void {
        state.user = user;
    },
};
