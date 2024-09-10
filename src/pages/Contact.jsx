import React, { useState } from 'react';

// Define the ContactPage functional component
export default function ContactPage() {
  // Initialize state to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle changes in form input fields
  const handleChange = (event) => {
    const { name, value } = event.target; // Extract name and value from the event
    setFormData({
      ...formData, // Preserve existing form data
      [name]: value // Update the specific field with the new value
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Handle form submission logic here (e.g., send form data to a server)
  };

  return (
    <div className="contact-container">
      {/* Title of the Contact Page */}
      <h1 className="contact-title">Contact Page</h1>
      {/* Form for user contact input */}
      <form className="contact-form" onSubmit={handleSubmit}>
        {/* Name input field */}
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name} // Controlled component: value is from state
            onChange={handleChange} // Update state on change
            required // Make this field mandatory
          />
        </label>
        <br />
        {/* Email input field */}
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email} // Controlled component: value is from state
            onChange={handleChange} // Update state on change
            required // Make this field mandatory
          />
        </label>
        <br />
        {/* Message textarea */}
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message} // Controlled component: value is from state
            onChange={handleChange} // Update state on change
            required // Make this field mandatory
          />
        </label>
        <br />
        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
