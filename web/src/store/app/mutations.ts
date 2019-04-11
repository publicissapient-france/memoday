import {AppState, MutationTypes} from '../type-defs';

export const mutations = {
    [MutationTypes.ADD_VALUE](state: AppState, value: any): void {
        state.value += value;
    },
    [MutationTypes.SET_USER](state: AppState, user: any): void {
        state.user = user;
    },
};
