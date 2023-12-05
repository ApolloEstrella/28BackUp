// store/index.js
import { createStore } from 'vuex';

const store = createStore({
    state: {
        message: 'Hello from Vuex!',
        counter: 0,
    },
    mutations: {
        incrementCounter(state) {
            state.counter++;
        },
    },
});

export default store;
