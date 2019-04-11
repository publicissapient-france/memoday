import {AppState, MutationTypes} from '../type-defs';

export const mutations = {
    [MutationTypes.SET_USER](state: AppState, userDetail: any): void {
        state.userDetail = userDetail;
    },
};
