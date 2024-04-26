import jsonData from'./../data/data.json';
const initialState = {
  data: jsonData,
  input:"",
  select:"default",
};
export const reducerData = (state = initialState, action) => {
  switch (action.type) {
    case "Input":
      return {
      ...state,
      input:action.payload,

      };
      
     case "Select":
      return {
      ...state,
      select:action.payload,

      };

    default:
      return state;
  

}
};


