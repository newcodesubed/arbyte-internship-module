import { useReducer } from "react";

function wizardReducer(state, action) {
  switch (action.type) {
    case "NEXT":
      return { ...state, step: state.step + 1 };
    case "PREV":
      return { ...state, step: state.step - 1 };
    case "UPDATE_DATA":
      return {
        ...state,
        formData: { ...state.formData, ...action.payload },
      };
    case "RESET":
      return action.initialState;
    default:
      throw new Error("Unknown action");
  }
}

export function useFormWizard(initialStep = 0, initialData = {}) {
  const initialState = { step: initialStep, formData: initialData };

  const [state, dispatch] = useReducer(wizardReducer, initialState);

  const next = () => dispatch({ type: "NEXT" });
  const prev = () => dispatch({ type: "PREV" });
  const updateData = (data) => dispatch({ type: "UPDATE_DATA", payload: data });
  const reset = () => dispatch({ type: "RESET", initialState });

  return { ...state, next, prev, updateData, reset };
}
