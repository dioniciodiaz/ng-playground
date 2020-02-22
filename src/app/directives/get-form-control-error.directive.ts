/*
* this directive is based on
* https://github.com/srikanthmadasu/angular-error-msg-directive/blob/master/src/app/directives/formcontrol-validation-msg.directive.ts
*and https://guilhermewaess.github.io/ng-fveh/
*/
import { Directive, Input, HostListener, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { NgControl, ValidationErrors } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormControlValidationMsgService } from '@services/form-control-validation-msg.service';
@Directive({
  selector: '[appGetFormControlError]'
})

export class GetFormControlErrorDirective implements OnInit, OnDestroy {

  constructor(private elRef: ElementRef, private control: NgControl, private validationMsgService: FormControlValidationMsgService
  ) { }

  @Input() validationField = 'field';
  @Input() validationStyle = 'form-text text-danger';
  @Input() validationElement = 'span';
  statusChangeSubscription: Subscription;

  errorElementId = '';

  ngOnInit(): void {
    this.errorElementId = this.validationField + new Date() + '-error-msg';
    this.statusChangeSubscription = this.control.statusChanges.subscribe(
      (status) => {
        if (status === 'INVALID') {
          this.showError();
        } else {
          this.removeError();
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.statusChangeSubscription.unsubscribe();
  }

  @HostListener('blur', ['$event'])
  handleBlurEvent(event) {
    // This is needed to handle the case of clicking a required field and moving out.
    // Rest all are handled by status change subscription
    if (this.control.value == null || this.control.value === '') {
      if (this.control.errors) {
        this.showError();
      } else {
        this.removeError();
      }
    }
  }

  private showError() {
    this.removeError();
    const fieldErrors: ValidationErrors = this.control.errors;
    const firstFieldError: string = Object.keys(fieldErrors)[0];
    console.log('fieldErrors', fieldErrors);
    console.log('firstFieldError', firstFieldError);

    if (firstFieldError.length > 1) {
      const errorMsg = this.validationMsgService.getValidationMsg(firstFieldError, this.validationField, fieldErrors);
      // tslint:disable-next-line:max-line-length
      const errorElement = `<${this.validationElement} class="${this.validationStyle}" id="${this.errorElementId}">${errorMsg}</${this.validationElement}>`;
      this.elRef.nativeElement.parentElement.insertAdjacentHTML('beforeend', errorElement);
    }
  }

  private removeError(): void {
    const errorElement = document.getElementById(this.errorElementId);
    if (errorElement) {
      errorElement.remove();
    }
  }
}


