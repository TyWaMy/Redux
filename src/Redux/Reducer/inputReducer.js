import { INPUT } from "../Action/actionTypes";

const intialState = {
  text: "",
};

export default function inputReducer(state = intialState, action) {
  switch (action.type) {
    case INPUT:
      return {
        ...state,
        text:action.text
      };

    default:
      return state;
  }
}

