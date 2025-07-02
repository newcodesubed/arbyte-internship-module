import { useState } from "react";

const useFormField = (initialValue, validateFn) => {
  const [value, setValue] = useState(initialValue);
  const [touched, setTouched] = useState(false);

  const isValid = validateFn(value);

  const reset = () => {
    setValue(initialValue);
    setTouched(false);
  };

  return {
    value,
    isValid,
    touched,
    setTouched,
    reset,
    bind: {
      value,
      onChange: (e) => setValue(e.target.value),
      onBlur: () => setTouched(true),
    },
  };
};

export default useFormField;
