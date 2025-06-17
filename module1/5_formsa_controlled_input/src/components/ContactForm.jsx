import useFormField from "../Hooks/useFormField";

const ContactForm = () => {
  const name = useFormField("", (val) => val.trim() !== "");
  const email = useFormField("", (val) => /\S+@\S+\.\S+/.test(val));
  const message = useFormField("", (val) => val.trim().length >= 10);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.isValid || !email.isValid || !message.isValid) {
      name.setTouched(true);
      email.setTouched(true);
      message.setTouched(true);
      return;
    }
    alert("Message sent successfully!");
    name.reset();
    email.reset();
    message.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow-md w-full max-w-md"
    >
      <h2 className="text-xl font-bold mb-4">Contact Us</h2>
      <input
        type="text"
        placeholder="Name"
        {...name.bind}
        className="border p-2 w-full rounded mb-2"
      />
      {name.touched && !name.isValid && (
        <p className="text-red-500 text-sm">Name is required.</p>
      )}

      <input
        type="email"
        placeholder="Email"
        {...email.bind}
        className="border p-2 w-full rounded mb-2"
      />
      {email.touched && !email.isValid && (
        <p className="text-red-500 text-sm">Valid email is required.</p>
      )}

      <textarea
        placeholder="Your Message"
        {...message.bind}
        className="border p-2 w-full rounded mb-2"
      />
      {message.touched && !message.isValid && (
        <p className="text-red-500 text-sm">
          Message must be at least 10 characters.
        </p>
      )}

      <button className="bg-green-600 text-white px-4 py-2 rounded">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
