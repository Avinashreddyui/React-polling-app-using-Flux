import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import ApiRequests from '../api/ApiRequests';

let AppActions = {
    add: function (reactionToAdd) {
        ApiRequests.add(reactionToAdd,
            f => {
                AppDispatcher.dispatch({
                    actionType: AppConstants.API_ADD_START
                });
            },
                apiData => {
                AppDispatcher.dispatch({
                    actionType: AppConstants.API_ADD_SUCCESS,
                    data: apiData
                });
            },
                error => {
                AppDispatcher.dispatch({
                    actionType: AppConstants.API_ADD_ERROR,
                    error: error
                });
            }
        );
    },
    remove: function (id) {
        ApiRequests.remove(id,
                f => {
                AppDispatcher.dispatch({
                    actionType: AppConstants.API_REMOVE_START,
                    id: id
                });
            },
                f => {
                AppDispatcher.dispatch({
                    actionType: AppConstants.API_REMOVE_SUCCESS
                });
            },
                error => {
                AppDispatcher.dispatch({
                    actionType: AppConstants.API_REMOVE_ERROR,
                    error: error
                });
            }
        );
    },
    voteAnswer1: function (id, name) {
        ApiRequests.voteAnswer1(id, name,
                f => {
                AppDispatcher.dispatch({
                    actionType: AppConstants.API_VOTE_ANSWER1_START
                });
            },
                f => {
                AppDispatcher.dispatch({
                    actionType: AppConstants.API_VOTE_ANSWER1_SUCCESS,
                    id: id,
                    name: name
                });
            },
                error => {
                AppDispatcher.dispatch({
                    actionType: AppConstants.API_VOTE_ANSWER1_ERROR,
                    error: error
                });
            }
        );
    },
    voteAnswer2: function (id, name) {
        ApiRequests.voteAnswer2(id, name,
                f => {
                AppDispatcher.dispatch({
                    actionType: AppConstants.API_VOTE_ANSWER2_START
                });
            },
                f => {
                AppDispatcher.dispatch({
                    actionType: AppConstants.API_VOTE_ANSWER2_SUCCESS,
                    id: id,
                    name: name
                });
            },
                error => {
                AppDispatcher.dispatch({
                    actionType: AppConstants.API_VOTE_ANSWER2_ERROR,
                    error: error
                });
            }
        );
    },
    setUsername: function (name) {
        AppDispatcher.dispatch({
            actionType: AppConstants.SET_USERNAME,
            name: name
        });
    },
    apiGetAll: function () {
        ApiRequests.getAll(
            f => {
                AppDispatcher.dispatch({
                    actionType: AppConstants.API_GETALL_START
                });
            },
            apiData => {
                AppDispatcher.dispatch({
                    actionType: AppConstants.API_GETALL_SUCCESS,
                    data: apiData
                });
            },
            error => {
                AppDispatcher.dispatch({
                    actionType: AppConstants.API_GETALL_ERROR,
                    error: error
                });
            }
        );
    }
}

export default AppActions;