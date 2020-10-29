import axios from "axios";

export default {
    namespaced: true,

    state: {
        workData: null
    },

    getters: {
        work: state => state.workData
    },

    mutations: {
        setWorkData(state, data) {
            state.workData = data;
        }
    },

    actions: {
        getWorkData({ commit }) {
            axios
                .get(process.env.MIX_VUE_APP_API_URL + "posts")
                .then(response => {
                    console.log(response.data);
                    commit("setWorkData", response.data);
                })
                .catch(errors => {
                    console.log(errors);
                });
        },
    }
}