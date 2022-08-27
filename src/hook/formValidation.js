import { useCallback, useState } from 'react';

export default function useFormWithValidation(defaultValues = {}) {

  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  localStorage.setItem('formState', isValid);

  const handleChange = (evt) => {
    const input = evt.target;
    const name = input.name;
    const value = input.value;

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: input.validationMessage });
    setIsValid(input.closest('form').checkValidity());
  }
  const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsValid(newIsValid);
    localStorage.removeItem('formState');
  },
    [setValues, setErrors, setIsValid]);

  return { values, errors, isValid, handleChange, resetForm, setValues, setIsValid, setErrors };
}
