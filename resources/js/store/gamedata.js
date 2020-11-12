import axios from "axios";

export default {
    namespaced: true,

    state: {
        gameData: null
    },

    getters: {
        game: state => state.gameData
    },

    mutations: {
        setGameData(state, data) {
            state.gameData = data;
        }
    },

    actions: {
        getGameData({ commit }) {
            axios
                .get(process.env.MIX_VUE_APP_API_URL + "games")
                .then(response => {
                    console.log(response.data);
                    commit("setGameData", response.data);
                })
                .catch(errors => {
                    console.log(errors);
                });
        },
    }
}