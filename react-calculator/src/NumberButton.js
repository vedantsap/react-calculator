import { ACTIONS } from "./App"

export default function NumberButton({ dispatch, number }) {
    // when any number button gets clicked, we return the number
    // itself but also trigger the dispatch with the actions
    return <button onClick={() => dispatch({ type: ACTIONS.ADD, payload: { digit: number } })} >
        {number}
    </button>
}