// https://www.youtube.com/watch?v=-q5sv95BPYw
const initialState = {
    list : []
}

const TodoReducer = (state = initialState , action) => {
    if(action.type === "ADDTODO"){
        
        return{
            ...state,
            data : [
                ...state.list,
                {
                    data:data
                }
            ]
        }
    }
    return state;
}