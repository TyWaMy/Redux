import { CAR } from "../Action/actionTypes";

const intialState = {
  text: [""],
};

export default function inputReducer(state = intialState, action) {
  switch (action.type) {
    case CAR:
      return {
        ...state,
        text: action.text,
      };

    default:
      return state;
  }
}
