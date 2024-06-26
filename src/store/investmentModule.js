/*
* @description : Follow your developments and activities with algorithms
* @author : Gokhan Katar
* @github : https://github.com/gokhankatar
* @x : https://twitter.com/gokhan_crypto/
* @instagram :  https://www.instagram.com/katargokhan96/
*/

const investmentModule = {
  state() {
    return {
      investmentsList: [],
    };
  },

  getters: {
    getMaxGenre(state) {
      let gold = 0;
      let silver = 0;
      let cryptocurrency = 0;
      let forex = 0;
      let stocks = 0;

      state.investmentsList.map((investment) => {
        if (investment.status === "bought") {
          if (investment.genre === "Stocks") {
            stocks++;
          } else if (investment.genre === "Gold") {
            gold++;
          } else if (investment.genre === "Silver") {
            silver++;
          } else if (investment.genre === "Cryptocurrency") {
            cryptocurrency++;
          } else if (investment.genre === "Forex") {
            forex++;
          }
        }
      });

      let genreList = [stocks, gold, cryptocurrency, silver, forex];
      let maxIndex = genreList.indexOf(Math.max(...genreList));
      let maxGenre;

      switch (maxIndex) {
        case 0:
          maxGenre = "Stocks";
          break;
        case 1:
          maxGenre = "Gold";
          break;
        case 2:
          maxGenre = "Cryptocurrency";
          break;
        case 3:
          maxGenre = "Silver";
          break;
        case 4:
          maxGenre = "Forex";
          break;
        default:
          maxGenre = "Unknown";
      }

      return maxGenre;
    },

    totalCost(state) {
      let costs = {
        usdCost: 0,
        eurCost: 0,
        gbpCost: 0,
        jpyCost: 0,
        btcCost: 0,
        tryCost: 0,
      };

      state.investmentsList.map((investment) => {
        if (investment.status === "bought") {
          if (investment.currency === "$") {
            costs.usdCost += Number(investment.cost);
          } else if (investment.currency === "€") {
            costs.eurCost += Number(investment.cost);
          } else if (investment.currency === "£") {
            costs.gbpCost += Number(investment.cost);
          } else if (investment.currency === "₺") {
            costs.tryCost += Number(investment.cost);
          } else if (investment.currency === "¥") {
            costs.jpyCost += Number(investment.cost);
          } else if (investment.currency === "₿") {
            costs.btcCost += Number(investment.cost);
          }
        }
      });

      let costArray = [];

      if (costs.usdCost !== 0) costArray.push(costs.usdCost + " $");
      if (costs.eurCost !== 0) costArray.push(costs.eurCost + " €");
      if (costs.gbpCost !== 0) costArray.push(costs.gbpCost + " £");
      if (costs.jpyCost !== 0) costArray.push(costs.jpyCost + " ¥");
      if (costs.btcCost !== 0) costArray.push(costs.btcCost + " ₿");
      if (costs.tryCost !== 0) costArray.push(costs.tryCost + " ₺");

      return costArray;
    },
  },

  mutations: {
    pushInvestment(state, payload) {
      state.investmentsList.push(payload);
    },
    changeInvestmentStatus(state, payload) {
      if (state.investmentsList[payload].status === "bought") {
        state.investmentsList[payload].status = "sold";
      } else {
        state.investmentsList[payload].status = "bought";
      }
    },
    changeInvestmentInfo(state, payload) {
      state.investmentsList[payload.changedItemIndex].name =
        payload.changedItemName;
      state.investmentsList[payload.changedItemIndex].genre =
        payload.changedItemGenre;
      state.investmentsList[payload.changedItemIndex].amount =
        payload.changedItemAmount;
      state.investmentsList[payload.changedItemIndex].cost =
        payload.changedItemCost;
      state.investmentsList[payload.changedItemIndex].status =
        payload.changedItemStatus;
      state.investmentsList[payload.changedItemIndex].currency =
        payload.changedItemCurrency;
    },
    deleteInvestment(state, payload) {
      state.investmentsList.splice(payload, 1);
    },
    selectAllInvestment(state) {
      if (state.investmentsList.every((item) => item.isSelected)) {
        state.investmentsList.forEach((item) => (item.isSelected = false));
      } else {
        state.investmentsList.forEach((item) => (item.isSelected = false));
      }
    },
    multipleDeleteInvestment(state) {
      state.investmentsList.map((item) => {
        if (item.isSelected) {
          state.investmentsList = state.investmentsList.filter(
            (investment) => investment !== item
          );
        }
      });
    },
    deleteAllInvestment(state) {
      state.investmentsList = [];
    },
    multipleBoughtInvestment(state) {
      state.investmentsList.map((item) => {
        if (item.isSelected) {
          item.status = "bought";
        }
      });
    },
    allBoughtInvestment(state) {
      state.investmentsList.forEach((item) => {
        item.status = "bought";
      });
    },
    multipleSoldInvestment(state) {
      state.investmentsList.map((item) => {
        if (item.isSelected) {
          item.status = "sold";
        }
      });
    },
    allSoldInvestment(state) {
      state.investmentsList.forEach((item) => {
        item.status = "sold";
      });
    },
  },

  actions: {
    addInvestment(state, payload) {
      state.commit("pushInvestment", payload);
    },
    switchInvestmentStatus(state, payload) {
      state.commit("changeInvestmentStatus", payload);
    },
    switchInvestmentInfo(state, payload) {
      state.commit("changeInvestmentInfo", payload);
    },
    removeInvestment(state, payload) {
      state.commit("deleteInvestment", payload);
    },
    selectAllInvestments(state, payload) {
      state.commit("selectAllInvestment", payload);
    },
    multipleRemoveInvestment(state, payload) {
      state.commit("multipleDeleteInvestment", payload);
    },
    removeAllInvestment(state, payload) {
      state.commit("deleteAllInvestment", payload);
    },
    setBoughtInvestment(state, payload) {
      state.commit("multipleBoughtInvestment", payload);
    },
    setAllBoughtInvestment(state, payload) {
      state.commit("allBoughtInvestment", payload);
    },
    setSoldInvestment(state, payload) {
      state.commit("multipleSoldInvestment", payload);
    },
    setAllSoldInvestment(state, payload) {
      state.commit("allSoldInvestment", payload);
    },
  },
};

export default investmentModule;
