import ApiHelper from '../helper/Api';
import {
  GAMES_RECEIVE,
  GAME_REMOVE,
} from '../constants/ActionTypes';

module.exports = {
  fetch: () => {
    return (dispatch) => {
      return ApiHelper.fetchGames().then((games) => {
        const payload = {
          games,
        };
        dispatch({ type: GAMES_RECEIVE, payload });
      });
    };
  },

  create: (data) => {
    return (dispatch) => {
      return ApiHelper.createGame(data).then((game) => {
        const payload = {
          games: [game],
        };
        dispatch({ type: GAMES_RECEIVE, payload });
      });
    };
  },

  update: (data) => {
    return (dispatch) => {
      return ApiHelper.updateGame(data).then((game) => {
        const payload = {
          games: [game],
        };
        dispatch({ type: GAMES_RECEIVE, payload });
      });
    };
  },

  remove: (id) => {
    return (dispatch) => {
      return ApiHelper.removeGame(id).then(() => {
        const payload = {
          id,
        };
        dispatch({ type: GAME_REMOVE, payload });
      });
    };
  },
};
