import { useCallback, useState } from 'react';
import validator from "validator";

export default function useFormWithValidation(defaultValues = {}) {

  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  localStorage.setItem('formState', isValid);

  const handleChange = (evt) => {
    const input = evt.target;
    const name = input.name;
    const value = input.value;

    if (input.name !== "email") {
      setValues({ ...values, [name]: value });
      setErrors({ ...errors, [name]: input.validationMessage });
      setIsValid(input.closest('form').checkValidity());
    } else {
      setValues({ ...values, [name]: value });

      if (!validator.isEmail(input.value)) {
        setErrors({ ...errors, [name]: "Введите валидный email." });
        setIsValid(false);
        if (input.value === '' || input.value === null) {
          setErrors({ ...errors, [name]: "Заполните это поле." });
          setIsValid(false);
        }
      } else {
        setErrors({ ...errors, [name]: "" });
        setIsValid(true);
      }
    }
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
