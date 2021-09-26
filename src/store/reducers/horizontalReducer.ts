import {HorizontalActions, HorizontalQuestion, HorizontalState} from "../../types/horizontalQuestion";


const initialState: HorizontalState = {
    question: {
        words: null,
        title: null,
        questionNumber: null
    },
    history: [],
    answer: [],
    error: null
}



export const horizontalReducer = (state: HorizontalState = initialState, action: HorizontalActions): HorizontalState => {
    switch (action.type) {
        case HorizontalQuestion.FETCH_HORIZONTAL_QUESTION_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case HorizontalQuestion.FETCH_HORIZONTAL_QUESTION_SUCCESS:
            return {
                ...state,
                question: action.payload
            }
        case HorizontalQuestion.FETCH_HORIZONTAL_ANSWER_SUCCESS:
            console.log("reducer fetch answer = ", action.payload)
            return {
                ...state,
                answer: action.payload
            }
        case HorizontalQuestion.SET_HISTORY_ANSWERS:
            console.log("reducer set history = ", action.payload)
            return {
                ...state,
                history: [...state.history, action.payload]
            }
        default:
            return state
    }
}
