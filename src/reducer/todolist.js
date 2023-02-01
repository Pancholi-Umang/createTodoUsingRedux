const initialState = {
  list: [],
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDTODO":
      console.log(action.payload);
      return {
          ...state,
          list: [...state.list, action.payload],
        };
        
        case "DELETEALLTODO":
      return (state.list = []);

    case "REMOVETODO":
        let list = state.list.filter((filterArray) => {
            return filterArray.id !== action.payload;
        });

      return {...state,list}
      
    default:
      return state;
  }
};

export default TodoReducer;
