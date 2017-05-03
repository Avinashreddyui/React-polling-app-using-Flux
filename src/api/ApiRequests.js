import fetch from 'isomorphic-fetch';

function _jsonError(response) {
    let json = response.json();
    if (response.ok) {
        return json;
    } else {
        return json.then(err => {
            throw err;
        });
    }
}

let ApiRequests = {
    add: function (reactionToAdd, start, success, error) {
        start();
        fetch('http://api.reactiontracker.com/reactions', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(reactionToAdd)
        })
            .then(_jsonError)
            .then(apiData => success(apiData))
            .catch(apiError => error(apiError));
    },
    getAll: function (start, success, error) {
        start();
        fetch('http://api.reactiontracker.com/reactions')
            .then(_jsonError)
            .then(apiData => success(apiData))
            .catch(apiError => error(apiError));
    },
    remove: function (id, start, success, error) {
        start();
        fetch('http://api.reactiontracker.com/reactions/' + id, {
            headers: {
                'Accept': 'application/json'
            },
            method: 'delete'
        })
            .then(_jsonError)
            .then(apiData => success(apiData))
            .catch(apiError => error(apiError));
    },
    voteAnswer1: function (id, name, start, success, error) {
        start();
        fetch('http://api.reactiontracker.com/reactions/' + id + '/voteAnswer1/' + name, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'post'
        })
            .then(_jsonError)
            .then(f => success())
            .catch(apiError => error(apiError.message));
    },
    voteAnswer2: function (id, name, start, success, error) {
        start();
        fetch('http://api.reactiontracker.com/reactions/' + id + '/voteAnswer2/' + name, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'post'
        })
            .then(_jsonError)
            .then(f => success())
            .catch(apiError => error(apiError.message));
    }
};

export default ApiRequests;