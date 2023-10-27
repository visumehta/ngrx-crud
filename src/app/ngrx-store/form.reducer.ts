import { Action, createReducer, on, props } from "@ngrx/store";
import * as formActions from "./form.actions";
import { USER } from "../interfaces/USER";

interface UserData{
    formData : USER | null,
    loadedSuccessfully : boolean,
}

const initialState : UserData = {
    formData: null,
    loadedSuccessfully : false,
}

const _appReducer = createReducer<UserData>(
    initialState,
    on(formActions.addFormData, (state, {data}) => {
        return { ...state, formData: data}
    }),
    on(formActions.addFormDataSuccess, (state) => {
         console.log('data success', state);
        return { ...state,loadedSuccessfully : true}
    }),
    on(formActions.addFormDataError, (state, { error }) => {
        console.log('state', state);
        // console.log('error', error)
        return { ...state, errorLoaded: 'Error'}
    })
);

export function appReducer(state: UserData | undefined, action: Action) {
    return _appReducer(state, action)
}

