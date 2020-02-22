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
    required: (field: string) => `${field} is required`,
    maxlength: (field: string, { requiredLength, actualLength }: any) => {
      return `Max permited characters: ${requiredLength}, but you typed: ${actualLength} on ${field}`;
    },
    minlength: (field: string, { requiredLength, actualLength }: any) => {
      return `Min permited characters: ${requiredLength}, but you typed: ${actualLength} on ${field}`;
    },
    email: () => 'It must be a valid email.'
  };

  public getValidationMsg(validationId: string, field: string = 'field', errorsObject: ValidationErrors): string {
    if (this.errorMessages.hasOwnProperty(validationId)) {
      return this.errorMessages[validationId](field, errorsObject[validationId]);
    }
    return `${field} is invalid`;
  }
}
