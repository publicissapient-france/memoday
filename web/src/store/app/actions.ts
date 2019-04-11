import {MutationTypes} from '../type-defs/';
import {ActionContext} from 'vuex';
import {AppState} from '../type-defs';

export const actions = {
    setCurrentUser,
};

function setCurrentUser({ commit, dispatch, state}: ActionContext<AppState, any>, userDetail: any): void {
    commit(MutationTypes.SET_USER, userDetail);
}
