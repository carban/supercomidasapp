import {createStore} from "redux";

const initialState = {
    language: 'es'
}

const reducerLang = (state = initialState, action) => {
    if (action.type === "CHANGE_LAN") {
        return {
            ...state,
            language: action.language
        }
    }
    return state;
}

export default createStore(reducerLang);