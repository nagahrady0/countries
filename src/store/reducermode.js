const initialState = {
mode:""
};
export const reducerMode = (state = initialState, action) => {
  switch (action.type) {
    case "dark":
      return {
      ...state,
      mode:"dark",

      };
      
     case "light":
      return {
      ...state,
      mode:"light",

      };

    default:
      return state;
  

}
};


