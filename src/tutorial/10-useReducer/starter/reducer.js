import { data } from "../../../data"

// you can also setup const variables for action type name so that you don't get silly errors due to small spelling mistakes
const reducer = (state, action) => {
  if(action.type === "removeItem"){
    let newPeople = state.people.filter((input) => input.id !== action.id)
    return {...state, people: newPeople}
  }else if(action.type === "resetPeople"){
    return {...state, people: data}
  }else if(action.type === "clearPeople"){
    return {...state, people: []}
  }
  throw new Error("no matching action types, check your action types")
}
export default reducer;