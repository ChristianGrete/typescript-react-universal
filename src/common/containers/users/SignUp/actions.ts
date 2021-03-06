import { IValidationError } from 'interfaces';
import { actionCreator } from 'satcheljs';
import { ISignUpForm, SignUpFormName } from './interfaces';

export const formChange = actionCreator(
  'users.signUp.formChange',
  (name: SignUpFormName, value: string) => ({
    name,
    value,
  })
);

export const formSubmit = actionCreator(
  'users.signUp.formSubmit',
  (data: ISignUpForm) => data
);

export const formError = actionCreator(
  'users.signUp.formError',
  (error: IValidationError) => error
);

export const formSubmitted = actionCreator('FORM_SUBMITTED');

export const formReset = actionCreator('FORM_RESET');
