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
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>*</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>-</button>
        <button>.</button>
        <button>0</button>
        <button className="span-two">=</button>
    </div>
  );
}

export default App;
