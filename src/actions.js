export const  setTodo =(value)=>({
    type:"SET_INPUT_TEXT",
    payload:value
})
export const  setList =(value)=>({
    type:"SET_LIST_ITEMS",
    payload:value
})
export const  setDelete =(value)=>({
    type:"SET_DELETE_ITEMS",
    payload:value
})
export const  setEdit =(value,id)=>({
    type:"SET_EDIT_ITEMS",
    payload:value,
    id:id
})
export const  setUpdate =(value,id)=>({
    type:"SET_UPDATE_ITEMS",
    payload:value,
    id:id
})