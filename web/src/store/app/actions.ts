import {MutationTypes} from '../type-defs/';
import {ActionContext} from 'vuex';
import {AppState} from '../type-defs';

export const actions = {
    setCurrentUser,
};

function setCurrentUser({ commit, dispatch, state}: ActionContext<AppState, any>, user: firebase.User): void {
    commit(MutationTypes.SET_USER, user);
}
