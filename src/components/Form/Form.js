import "../Form/Form.css";
import React from "react";
export default function Form() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
    joinNewsLetter: false,
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => {
      return { ...prevData, [name]: type === "checkbox" ? checked : value };
    });
  }
  //   console.log(formData);

  function handleSubmit(event) {
    event.preventDefault();
    if (formData.confirmPassword === formData.password) {
      console.log("Thank you for registration!");
    } else {
      console.log("Passwords do not match!");
      return;
    }
    if (formData.joinNewsLetter) {
      console.log("Thank you for joining the newsletter");
    }
    console.log(formData);
  }

  return (
    <form
      className="form"
      onSubmit={handleSubmit}
    >
      <input
        type="email"
        placeholder="Email"
        className="input--text"
        id="input--email"
        value={formData.email}
        onChange={handleChange}
        name="email"
      />
      <input
        type="password"
        placeholder="Password"
        className="input--text"
        id="input--password"
        value={formData.password}
        onChange={handleChange}
        name="password"
      />
      <input
        type="password"
        placeholder="Confirm password"
        className="input--text"
        id="input--confirm--password"
        value={formData.confirmPassword}
        onChange={handleChange}
        name="confirmPassword"
      />
      <div className="checkbox--wrapper">
        <input
          type="checkbox"
          id="checkbox"
          checked={formData.checked}
          onChange={handleChange}
          name="joinNewsLetter"
        />
        <label htmlFor="checkbox">I want to join the newsletter</label>
      </div>

      <button>Sign up</button>
    </form>
  );
}
