import { useRef, useState } from "react";
import useFormField from "../Hooks/useFormField";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const name = useFormField("", (val) => val.trim() !== "");
  const email = useFormField("", (val) => /\S+@\S+\.\S+/.test(val));
  const message = useFormField("", (val) => val.trim().length >= 10);
  const [gender, setGender] = useState("");
  const [socialApp, setSocialApp] = useState("");
  const [captchaValue, setCaptchaValue] = useState(null);
  const recaptchaRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !name.isValid ||
      !email.isValid ||
      !message.isValid ||
      !gender ||
      !socialApp ||
      !captchaValue
    ) {
      name.setTouched(true);
      email.setTouched(true);
      message.setTouched(true);
      alert("Please fill out all fields and verify the CAPTCHA.");
      return;
    }

    alert("Message sent successfully!");

    name.reset();
    email.reset();
    message.reset();
    setGender("");
    setSocialApp("");
    setCaptchaValue(null);
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-lg w-full max-w-lg space-y-4"
    >
      <h2 className="text-2xl font-bold text-gray-800 text-center">
        Contact Us
      </h2>

      {/* Name */}
      <div>
        <input
          type="text"
          placeholder="Your Name"
          {...name.bind}
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {name.touched && !name.isValid && (
          <p className="text-red-500 text-sm mt-1">Name is required.</p>
        )}
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          placeholder="Your Email"
          {...email.bind}
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {email.touched && !email.isValid && (
          <p className="text-red-500 text-sm mt-1">Valid email is required.</p>
        )}
      </div>

      {/* Gender */}
      <div className="flex items-center gap-6">
        <label className="text-gray-700 font-semibold">Gender:</label>
        <label className="flex items-center gap-1">
          <input
            type="radio"
            value="Male"
            checked={gender === "Male"}
            onChange={() => setGender("Male")}
          />
          Male
        </label>
        <label className="flex items-center gap-1">
          <input
            type="radio"
            value="Female"
            checked={gender === "Female"}
            onChange={() => setGender("Female")}
          />
          Female
        </label>
      </div>

      {/* Social App Dropdown */}
      <div>
        <label className="block text-gray-700 font-semibold mb-1">
          Most used social app:
        </label>
        <select
          value={socialApp}
          onChange={(e) => setSocialApp(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">-- Select --</option>
          <option value="Instagram">Instagram</option>
          <option value="Facebook">Facebook</option>
          <option value="TikTok">TikTok</option>
          <option value="Twitter">Twitter</option>
          <option value="Snapchat">Snapchat</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <textarea
          placeholder="Your Message"
          {...message.bind}
          rows="4"
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {message.touched && !message.isValid && (
          <p className="text-red-500 text-sm mt-1">
            Message must be at least 10 characters.
          </p>
        )}
      </div>

      {/* reCAPTCHA */}
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey="6LdQKGUrAAAAAAnQ1OlMGNJvWsTesZc40Y8EJtPb"
        onChange={(value) => setCaptchaValue(value)}
      />

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
