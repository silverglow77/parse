import axios from "axios";

export default {
    namespaced: true,

    state: {
        userData: null
    },

    getters: {
        user: state => state.userData
    },

    mutations: {
        setUserData(state, user) {
            state.userData = user;
        }
    },

    actions: {
        getUserData({ commit }) {
            axios
                .get(process.env.MIX_VUE_APP_API_URL + "user/user")
                .then(response => {
                    commit("setUserData", response.data);
                })
                .catch(() => {
                    localStorage.removeItem("authToken");
                });
        },
        sendLoginRequest({ commit }, data) {
            commit("setErrors", {}, { root: true });
            let dest = process.env.MIX_VUE_APP_API_URL;
            return axios
                .post( dest+ "user/login", data)
                .then(response => {
                    if (response) {
                        commit("setUserData", response.data.user);
                        localStorage.setItem("authToken", response.data.token);
                    }
                })
                .catch(errors => {
                    debugger;
                    console.log(errors);
                    return Promise.reject(errors)
                })
        },
        sendRegisterRequest({ commit }, data) {
            commit("setErrors", {}, { root: true });
            return axios
                .post(process.env.MIX_VUE_APP_API_URL + "user/register", data)
                .then(response => {
                    commit("setUserData", response.data.user);
                    debugger
                    localStorage.setItem("authToken", response.data.token);
                })
                .catch(errors => {
                    debugger;
                    console.log(errors);
                    return Promise.reject(errors);
                })
        },
        sendLogoutRequest({ commit }) {
            axios.get(process.env.MIX_VUE_APP_API_URL + "user/logout").then(() => {
                commit("setUserData", null);
                localStorage.removeItem("authToken");
            });
        },
        sendVerifyResendRequest() {
            return axios.get(process.env.MIX_VUE_APP_API_URL + "email/resend");
        },
        sendVerifyRequest({ dispatch }, hash) {
            return axios
                .get(process.env.MIX_VUE_APP_API_URL + "email/verify/" + hash)
                .then(() => {
                    dispatch("getUserData");
                });
        }
    }
}