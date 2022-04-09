import {ACTIONS} from "./Actions";

export default function DigitButton({dispatch, digit}) {
    return (
        <button onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, payload: {digit: 1}})}>
            {digit}
        </button>
    )
}
