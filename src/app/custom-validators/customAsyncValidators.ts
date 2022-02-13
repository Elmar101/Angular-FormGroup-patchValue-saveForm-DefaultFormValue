import { FormControl } from "@angular/forms";
import { timer } from "rxjs";
import { map, switchMap } from "rxjs/operators";

export const userNameExit = (UserService, time: number = 1000) => {
  return (control: FormControl) => {
    return timer(time).pipe(
      switchMap(() => UserService.isExitName(control.value)),
      map((result) => (!result ? null : { isUserNameExit: true }))
    );
  };
};
