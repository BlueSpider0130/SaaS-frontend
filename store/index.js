export const strict = false
export var state = () => ({
    counter: "",
    user_name: "",
    user_id:"",
    user_email:"",
    get_reader_data:[],
    get_pdf_data:[],
})

export const mutations = {

    setSideBar(state, { text }) {
        state.counter = text
    },

    setUserData(state, { text }) {
        state.user_name = text.user_name
        state.user_id = text.user_id
        state.user_email = text.user_email
    },

    setReaderData(state, { text }){
        state.get_reader_data = text
    },
    
    setPdfData(state, { text }){
        state.get_pdf_data = text
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

    getUserEmail(state) {
        return state.user_email
    },

    getReaderData(state) {
        return state.get_reader_data
    },

    getPdfData(state){
        return state.get_pdf_data
    }

}