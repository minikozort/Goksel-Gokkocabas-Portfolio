import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handles changes in form input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    if (formData.name && formData.email && formData.message) {
      console.log('Form submitted:', formData); // Log form data to the console
      alert('Form submitted successfully!'); // Optional success message

      // Clear form after submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } else {
      console.log('Form not complete');
      alert('Please fill out all fields.');
    }
  };

  return (
    <div>
      <h1>Contact Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
