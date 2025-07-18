import { useFormWizard } from "./hooks/useFormWizard";

function FormWizard() {
  const { step, formData, next, prev, updateData, reset } = useFormWizard(
    0,
    {}
  );

  const handleChange = (e) => {
    updateData({ [e.target.name]: e.target.value });
  };

  return (
    <section>
      <h2>📝 Form Wizard</h2>
      <p>Step {step + 1}</p>

      {step === 0 && (
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name || ""}
          onChange={handleChange}
        />
      )}

      {step === 1 && (
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email || ""}
          onChange={handleChange}
        />
      )}

      {step === 2 && (
        <textarea
          name="message"
          placeholder="Your message"
          value={formData.message || ""}
          onChange={handleChange}
        />
      )}

      <div>
        <button onClick={prev} disabled={step === 0}>
          Previous
        </button>
        {step < 2 ? (
          <button onClick={next}>Next</button>
        ) : (
          <button onClick={() => alert(JSON.stringify(formData, null, 2))}>
            Submit
          </button>
        )}
        <button onClick={reset}>Reset</button>
      </div>
    </section>
  );
}

export default FormWizard;
