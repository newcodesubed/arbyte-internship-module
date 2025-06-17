import LoginForm from "./components/LoginForm";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6 space-y-10">
      <LoginForm />
      <ContactForm />
    </div>
  );
}

export default App;
