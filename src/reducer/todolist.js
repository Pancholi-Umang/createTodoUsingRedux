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

    case "DELETEALLTODO" :
      return {
        list: [],
      };

    case "REMOVETODO" :
      let list = state.list.filter((filterArray) => {
        return filterArray.id !== action.payload;
      });

      return { ...state, list };

    case "UPDATETODO" :
      let lista = state.list.find((filterArray) => {
        return filterArray.id === action.payload;
      });
      console.log(lista)

    default:
      return state;
  }
};

export default TodoReducer;
