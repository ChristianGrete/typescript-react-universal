import { mutator } from 'satcheljs';
import {
  formChange,
  formError,
  formReset,
  formSubmit,
  formSubmitted,
} from './actions';
import { SignUpFormName } from './interfaces';
import getStore from './store';

mutator(formError, ({ errors = {} }) => {
  getStore().errors = errors;
});

mutator(formChange, ({ name, value }) => {
  (getStore() as any)[name] = value;
});

mutator(formSubmit, () => {
  getStore().submitting = true;
});

mutator(formSubmitted, () => {
  getStore().submitting = false;
});

mutator(formChange, ({ name, value }) => {
  (getStore() as any)[name] = value;
});

mutator(formReset, () => {
  const store = getStore();
  store.email = '';
  store.errors = {};
  store.name = '';
  store.password = '';
  store.passwordConfirm = '';
  store.submitting = false;
});
