import {AppState, MutationTypes} from '../type-defs';

export const mutations = {
    [MutationTypes.SET_USER](state: AppState, user: any): void {
        state.user = user;
    },
};
