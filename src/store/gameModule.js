/*
* @description : Follow your developments and activities with algorithms
* @author : Gokhan Katar
* @github : https://github.com/gokhankatar
* @x : https://twitter.com/gokhan_crypto/
* @instagram :  https://www.instagram.com/katargokhan96/
*/

const gameModule = {
  state() {
    return {
      gamesList: [],
    };
  },

  getters: {
    getPlayedGames(state) {
      return state.gamesList.filter((game) => game.status === "played").length;
    },
    playPlatform(state) {
      let pc = 0;
      let playstation = 0;
      let xbox = 0;
      let mobile = 0;
      let nintendo = 0;

      state.gamesList.map((game) => {
        if (game.platform == "PC") {
          pc++;
        } else if (game.platform == "Playstation") {
          playstation++;
        } else if (game.platform == "Xbox") {
          xbox++;
        } else if (game.platform == "Mobile") {
          mobile++;
        } else if (game.platform == "Nintendo") {
          nintendo++;
        }
      });

      const platformCounts = [pc, playstation, mobile, nintendo, xbox];
      const platforms = ["PC", "Playstation", "Mobile", "Nintendo", "Xbox"];

      let maxCount = Math.max(...platformCounts);
      let maxIndex = platformCounts.indexOf(maxCount);
      let mostPopularPlatform = platforms[maxIndex];

      return mostPopularPlatform;
    },
  },

  mutations: {
    pushGame(state, payload) {
      state.gamesList.push(payload);
    },
    changeGameStatus(state, payload) {
      if (state.gamesList[payload].status === "playing") {
        state.gamesList[payload].status = "played";
      } else {
        state.gamesList[payload].status = "playing";
      }
    },
    changeGameInfo(state, payload) {
      state.gamesList[payload.changedItemIndex].name = payload.changedItemName;
      state.gamesList[payload.changedItemIndex].platform =
        payload.changedItemPlatform;
      state.gamesList[payload.changedItemIndex].status =
        payload.changedItemStatus;
    },
    deleteGame(state, payload) {
      state.gamesList.splice(payload, 1);
    },
    selectAllGame(state) {
      if (state.gamesList.every((item) => item.isSelected)) {
        state.gamesList.forEach((item) => (item.isSelected = false));
      } else {
        state.gamesList.forEach((item) => (item.isSelected = false));
      }
    },
    multipleDeleteGame(state) {
      state.gamesList.map((item) => {
        if (item.isSelected) {
          state.gamesList = state.gamesList.filter((game) => game !== item);
        }
      });
    },
    deleteAllGame(state) {
      state.gamesList = [];
    },
    multiplePlayingGame(state) {
      state.gamesList.map((item) => {
        if (item.isSelected) {
          item.status = "playing";
        }
      });
    },
    allPlayingGame(state) {
      state.gamesList.forEach((item) => {
        item.status = "playing";
      });
    },
    multiplePlayedGame(state) {
      state.gamesList.map((item) => {
        if (item.isSelected) {
          item.status = "played";
        }
      });
    },
    allPlayedGame(state) {
      state.gamesList.forEach((item) => {
        item.status = "played";
      });
    },
  },

  actions: {
    addGame(state, payload) {
      state.commit("pushGame", payload);
    },
    switchGameStatus(state, payload) {
      state.commit("changeGameStatus", payload);
    },
    switchGameInfo(state, payload) {
      state.commit("changeGameInfo", payload);
    },
    removeGame(state, payload) {
      state.commit("deleteGame", payload);
    },
    selectAllGames(state, payload) {
      state.commit("selectAllGame", payload);
    },
    multipleRemoveGame(state, payload) {
      state.commit("multipleDeleteGame", payload);
    },
    removeAllGame(state, payload) {
      state.commit("deleteAllGame", payload);
    },
    setPlayingGame(state, payload) {
      state.commit("multiplePlayingGame", payload);
    },
    setAllPlayingGame(state, payload) {
      state.commit("allPlayingGame", payload);
    },
    setPlayedGame(state, payload) {
      state.commit("multiplePlayedGame", payload);
    },
    setAllPlayedGame(state, payload) {
      state.commit("allPlayedGame", payload);
    },
  },
};

export default gameModule;
