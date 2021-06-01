export var state = () => ({
    counter: "",
    user_name: "123456"
})

export const mutations = {

    setSideBar(state, { text }) {
        state.counter = text
    },

    setUserName(state, { text }) {
        state.user_name = text
    }

}

export const getters = {

    get(state) {
        return state.counter
    },

    getUserName(state) {
        return state.user_name
    }

}