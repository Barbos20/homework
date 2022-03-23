import {Dispatch} from "redux";
import {requestsAPI} from "./api/requestAPI";

type stateType = {
    error: string
    body: { success: boolean }
}

export type SetSuccessActionType = ReturnType<typeof setSuccessAC>
export type SetErrorActionType = ReturnType<typeof setErrorAC>

type ActionType = SetSuccessActionType | SetErrorActionType

const initialState: stateType = {
    error: 'not error',
    body: {success: true}
}

export const requestReducer = (state: stateType = initialState, action: ActionType): stateType => {
    switch (action.type) {
        case 'SET-SUCCESS': {
            return {
                ...state,
                body: {success: action.success}
            }
        }
        case 'SET-ERROR': {
            return {
                ...state,
                error: action.error
            }
        }
        default:
            return state;
    }
}

export const setSuccessAC = (success: boolean) => {
    return {
        type: 'SET-SUCCESS',
        success
    } as const
}

export const setErrorAC = (error: string) => {
    return {
        type: 'SET-ERROR',
        error
    } as const
}

type DispatchType = Dispatch<ActionType>

export const requestTC = (success: boolean) => (dispatch: DispatchType) => {
    requestsAPI.checkboxPost({success})
        .then(res => {
            dispatch(setErrorAC(res.data.errorText))
        })
        .catch(error => dispatch(setErrorAC(error.response ? error.response.data.errorText : error.message)))

}