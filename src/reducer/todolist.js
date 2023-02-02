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
        return {
        list: [],
      };
      
    case "REMOVETODO":
      let newList = state.list.filter((filterArray) => {
        return filterArray.id !== action.payload;
      });

      return {
        ...state,
        list: newList,
      };

      case "UPDATETODO":
      console.log(state.list.id);
      console.log(action.payload.id)
      console.log(action.payload.item)
      let lista = state.list.filter((filterArray)=>{
        
        if(filterArray.id === action.payload.id){
          return filterArray.item = action.payload.item
        }
        
      });
      console.log(lista);

    default:
      return state;
  }
};

export default TodoReducer;
