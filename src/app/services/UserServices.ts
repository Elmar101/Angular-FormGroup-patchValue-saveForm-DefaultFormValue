import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserServices {
  users: string[] = ["Ali", "Ceyhun", "Elmar"];
  constructor() {}

  isExitName(val: string) {
    if (this.users.indexOf(val) > -1) {
      return of(true);
    } else {
      return of(false);
    }
  }
}
