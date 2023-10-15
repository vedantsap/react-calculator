import { useReducer, useEffect } from 'react';
import './App.css';
import NumberButton from './NumberButton';
import OperationButton from './OperationButton';

// need to export these actions because they will be used outside of this component too
export const ACTIONS = {
  ADD: 'add',
  CLEAR: 'clear',
  BACKSPACE: 'backspace',
  CHOOSE_OPERATION: 'choose_operation',
  EVALUATE: 'eval'
}

/**
 * 
 * @param {the current state} state
 * @param {action as received by the dispatch} action
 *  Action:
 *  + type
 *  + payload
 * @returns nothing. Updates the existing state based on the action performed and the previous state
 */
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD:
      return {
        ...state,
        /* In case the currentOperand  is null, just take an OR with the empty string */
        currentOperand: `${state.currentOperand || ""}${action.payload.digit}`
      }
    default:
      return state
  }
}

function App() {
  /* Is this the definition for the state */
  const [{ previousOperand, currentOperand, operation }, dispatch] = useReducer(reducer, {})

  return (
    <div className='calculator'>

      <div className='output'>
        <div className='previous-operand'>{previousOperand}</div>
        <div className='current-operand'>{currentOperand}</div>
      </div>

      {/* Row 1 */}
      <button className='double-span'>AC</button>
      <button>DEL</button>
      {/* here we dont need put body because it is being returned form the NumberButton Component */}
      {/* The Numberbutton parameters are passed in through these class? params */}
      <OperationButton dispatch={dispatch} operation="/" />

      {/* Row 2 */}
      <NumberButton dispatch={dispatch} number="7" />
      <NumberButton dispatch={dispatch} number="8" />
      <NumberButton dispatch={dispatch} number="9" />
      <OperationButton dispatch={dispatch} operation="*" />

      {/* Row 3 */}
      <NumberButton dispatch={dispatch} number="4" />
      <NumberButton dispatch={dispatch} number="5" />
      <NumberButton dispatch={dispatch} number="6" />
      <OperationButton dispatch={dispatch} operation="-" />

      {/* Row 4 */}
      <NumberButton dispatch={dispatch} number="1" />
      <NumberButton dispatch={dispatch} number="2" />
      <NumberButton dispatch={dispatch} number="3" />
      <OperationButton dispatch={dispatch} operation="+" />

      {/* Row 5 */}
      <button className='double-span'>0</button>
      <button>.</button>
      <button>=</button>
    </div>
  )
}



export default App;
