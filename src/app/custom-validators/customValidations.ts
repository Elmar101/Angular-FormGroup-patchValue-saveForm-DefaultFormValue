import { FormControl } from "@angular/forms";

export const blackListValidator = (param: string) => {
  return (control: FormControl) => {
    const result = control.value.toString().indexOf(param) > -1;
    return result ? { blacklist: true } : null;
  };
};

export const whiteSpace = () => {
  return (control: FormControl) => {
    let result = false;
    if (
      control.value.toString().replace(/\s/g, "") === control.value.toString()
    ) {
      result = true;
    } else result = false;
    return result ? null : { whiteSpace: true };
  };
};
