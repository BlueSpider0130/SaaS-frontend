export var state = () => ({
    counter: "",
    user_name: "",
    user_id:"",
    user_email:""

})

export const mutations = {

    setSideBar(state, { text }) {
        state.counter = text
    },

    setUserData(state, { text }) {
        state.user_name = text.user_name
        state.user_id = text.user_id
        state.user_email = text.user_email
    }

}

export const getters = {

    get(state) {
        return state.counter
    },

    getUserName(state) {
        return state.user_name
    },

    getUserId(state) {
        return state.user_id
    },

    getUserEmail() {
        return state.user_email
    }

}