import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

/*
* this service is based on
* https://github.com/srikanthmadasu/angular-error-msg-directive/blob/master/src/app/directives/formcontrol-validation-msg.directive.ts
*and https://guilhermewaess.github.io/ng-fveh/
*/
@Injectable({
  providedIn: 'root'
})
export class FormControlValidationMsgService {

  constructor() { }

  private errorMessages = {
    required: (field: string) => `This ${field} is required`,
    maxlength: (field: string, errorObject: ValidationErrors) => {
      return `Max permited characters: ${errorObject.requiredLength}, but you typed: ${errorObject.actualLength} on ${field}`;
    },
    minlength: (field: string, errorObject: ValidationErrors) => {
      return `Min permited characters: ${errorObject.requiredLength}, but you typed: ${errorObject.actualLength} on ${field}`;
    },
    email: () => 'It must be a valid email.'
  };

  public getValidationMsg(validationId: string, field: string = 'field', errorsObject: ValidationErrors): string {
    if (this.errorMessages.hasOwnProperty(validationId)) {
      return this.errorMessages[validationId](field, errorsObject);
    }
    return `This ${field} is invalid`;
  }
}
