import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";
import { USER } from "../interfaces/USER";

export const addFormData = createAction('[Signup Component] Add Data', props<{data:USER}>());
export const addFormDataSuccess = createAction('[Signup Component] Add Data Successfully', emptyProps);
export const addFormDataError = createAction('[Signup Component] Add Data Error', props<{error: string}>());