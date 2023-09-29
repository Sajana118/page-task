import Vuex from 'vuex';

export default new Vuex.Store({
    state: {
        message: '',
    },
    mutations: {
        setMessage(state, newMessage) {
            state.message = newMessage;
        },
    },
    getters: {
        getMessage(state) {
            return state.message;
        },
    },
})