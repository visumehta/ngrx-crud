import { exhaustMap, map } from "rxjs";
import { HttpService } from "../services/http.service";
import * as formActions from "./form.actions";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {Injectable} from '@angular/core';
@Injectable()

export class FormEffects {
  constructor(private actions$: Actions, private _httpService: HttpService) {}

  postUserForm$ = createEffect(() =>
    this.actions$.pipe(
        ofType(formActions.addFormData),
        exhaustMap((action) => 
            this._httpService.postUserForm(action.data).pipe(map(()=> formActions.addFormDataSuccess()))
            )
        )
  );
}
