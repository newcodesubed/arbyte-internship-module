function UserForm() {
  function handleSubmit() {
    return "hello";
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white shadow rounded space-y-4"
    >
      <h2 className="text-xl font-bold">User Profile</h2>

      <input
        type="text"
        placeholder="Name"
        className="border p-2 w-full rounded"
      />

      <input
        type="email"
        placeholder="Email"
        className="border p-2 w-full rounded"
      />

      <textarea placeholder="Bio" className="border p-2 w-full rounded" />

      <input
        type="password"
        placeholder="Password"
        className="border p-2 w-full rounded"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Save
      </button>
    </form>
  );
}

export default UserForm;
