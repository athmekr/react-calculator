// import logo from './logo.svg';
import './styles.css';
import './App.css';
import {useReducer} from "react";
import {ACTIONS} from "./Actions";
import DigitButton from "./DigitButton";

// export const ACTIONS = {
//     ADD_DIGIT: 'add-digit',
//     CLEAR: 'clear',
//     DELETE_DIGIT: 'delete-digit',
//     CHOOSE_OPERATION: 'choose-operation',
//     EVALUATE: 'evaluate'
// }

function reducer(state, {type, payload}) {
    switch(type) {
        case ACTIONS.ADD_DIGIT:
            return {
                ...state,
                currentOperand: `${state.currentOperand || ""}${payload.digit}`
            }
    }
}

function App() {
    const [{currentOperand, previousOperand, operation}, dispatch] = useReducer(
        reducer,
        {}
    )
    // dispatch({type: ACTIONS.ADD_DIGIT, payload: {digit: 1}})
  return (
      <div className="calculator-grid">
        <div className="output">
            <div className="previous-operand">{previousOperand} {operation}</div>
            <div className="current-operand">{currentOperand}</div>
        </div>
        <button className="span-two">AC</button>
        <button>DEL</button>
        <DigitButton digit="÷" dispatch={dispatch}/>
        <DigitButton digit="1" dispatch={dispatch}/>
        <DigitButton digit="2" dispatch={dispatch}/>
        <DigitButton digit="3" dispatch={dispatch}/>
        <button>*</button>
        <DigitButton digit="4" dispatch={dispatch}/>
        <DigitButton digit="5" dispatch={dispatch}/>
        <DigitButton digit="6" dispatch={dispatch}/>
        <button>+</button>
        <DigitButton digit="7" dispatch={dispatch}/>
        <DigitButton digit="8" dispatch={dispatch}/>
        <DigitButton digit="9" dispatch={dispatch}/>
        <button>-</button>
        <DigitButton digit="." dispatch={dispatch}/>
        <DigitButton digit="0" dispatch={dispatch}/>
        <button className="span-two">=</button>
    </div>
  );
}

export default App;
