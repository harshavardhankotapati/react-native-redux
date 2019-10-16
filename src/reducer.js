let intialState = {
    id: 0,
    text: "",
    list: [],
    isUpdate: false
}

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case "SET_INPUT_TEXT":
            return {
                ...state,
                text: action.payload
            }
        case "SET_LIST_ITEMS":
            return {
                ...state,
                list: state.list.concat(action.payload),
                text: ""
            }
        case "SET_DELETE_ITEMS":
            return {
                ...state,
                list: state.list.filter((s, i) => i !== action.payload),
                text: ""
            }
        case "SET_EDIT_ITEMS":
            return {
                ...state,
                text: action.payload,
                id: action.id,
                isUpdate: true
            }
        case "SET_UPDATE_ITEMS":
            state.list.splice(action.id, 1, action.payload)
            return {
                ...state,
                text: "",
                isUpdate: false

            }
        default:
            return state
    }
}
export default reducer