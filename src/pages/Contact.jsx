import { useState } from "react";

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const Contact = () => {
  const [formState, setFormstate] = useState(initialFormState);

  const handleChange = (e) => {
    const value = e.target.value;
    const field = e.target.name;
    const newformState = { ...formState, [field]: value };
    setFormstate(newformState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formState.name.trim() ||
      !formState.email.trim() ||
      !formState.message.trim()
    ) {
      alert("Please fill in all required fields.");
      return;
    }
    console.log("form submitted:", formState);
    alert("Your message was sent successfully.");
    setFormstate(initialFormState);
  };
  return (
    <div className="min-h-screen bg-gradient-to-l from-[#94bdbd] to-[#176c81] flex justify-center items-center p-4 sm:p-8 text-gray-600">
      <form
        onSubmit={handleSubmit}
        className="fieldset bg-base-200 border-base-300 rounded-box w-full max-w-lg sm:max-w-md md:max-w-lg border p-6 sm:p-8 space-y-4"
      >
        <h1 className="fieldset-legend text-2xl sm:text-3xl font-bold text-center">
          Contact Us
        </h1>

        <label htmlFor="name" className="label text-base sm:text-lg">
          Name
        </label>
        <input
          required
          type="text"
          id="name"
          name="name"
          className="input input-md sm:input-lg w-full"
          placeholder="Name"
          value={formState.name}
          onChange={handleChange}
        />

        <label htmlFor="phone" className="label text-base sm:text-lg">
          Phone
        </label>
        <input
          required
          type="text"
          id="phone"
          name="phone"
          placeholder="Phone"
          value={formState.phone}
          onChange={handleChange}
          className="input input-md sm:input-lg w-full"
        />

        <label htmlFor="email" className="label text-base sm:text-lg">
          Email
        </label>
        <input
          required
          id="emain"
          name="email"
          type="email"
          className="input input-md sm:input-lg w-full"
          placeholder="Email"
          value={formState.email}
          onChange={handleChange}
        />

        <label className="label text-base sm:text-lg">Message</label>
        <textarea
          required
          name="message"
          id="message"
          value={formState.message}
          onChange={handleChange}
          className="textarea textarea-md sm:textarea-lg w-full"
          placeholder="Your message"
        ></textarea>

        <button className="btn btn-neutral btn-md sm:btn-lg w-full mt-4 bg-[#176c81] hover:bg-[#176c81]/70 hover:text-gray-400">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
