import { ADD, INPUT, SUB, CAR } from "./actionTypes";

export function add(){
   return{
      type:ADD
   }
   
}
export function sub() {
  return {
    type: SUB,
  };
}
export function inputs(text){
   return{
      type:INPUT,
      text
   }
   }
   export function cars(text) {
     return {
       type: CAR,
       text,
     };
   }