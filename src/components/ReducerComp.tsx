import { useReducer } from "react"

const initialState = {count: 0};
type incrtDecrtObj = {
  type: string
  payload: number
};
type resetObj = {
  type: string
}
type stateObj = {
  count: number
}
// type bothTypeObjs = incrtDecrtObj | resetObj

const callReducer = (state: stateObj, action: incrtDecrtObj ) => {
  switch(action.type) {
    case 'increament': {
      return { count: state.count + action.payload }
    }
    case 'decreament': {
      return { count: state.count - action.payload }
    }
    case 'reset': {
      return initialState
    }
    default: {
      return state;
    }
  }
}

export const ReducerComp = () => {
  const [state, handleDispatch] = useReducer(callReducer, initialState);
  return (
    <>
      <button onClick={() => handleDispatch({ type: 'increament', payload: 40 }) }>Increament</button>
      {state.count}
      <button onClick={() => handleDispatch({ type: 'decreament', payload: 20 }) }>Decreament</button>
      <button onClick={() => handleDispatch({ type: 'reset', payload: 0 }) }>Reset</button>
    </>
  )
}