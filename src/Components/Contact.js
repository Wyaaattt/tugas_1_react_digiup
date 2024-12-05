import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

function Contact() {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    contactMethod: "", // For radio button
    subscribe: false, // For checkbox 1
    contactSoon: false, // For checkbox 2
    anotherOption: false, // For checkbox 3
    inquiryType: "", // For dropdown
    attachment: null, // For file upload
    hobbies: [], // For hobbies checkboxes (Sport, Food, Music)
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target; // Destructure the event target

    // Check if it is a checkbox group (like hobbies) or a normal checkbox
    if (type === "checkbox") {
      if (name === "hobbies") {
        // Update hobbies array
        setFormData((prevFormData) => {
          const hobbies = checked ? [...prevFormData.hobbies, value] : prevFormData.hobbies.filter((hobby) => hobby !== value);

          return {
            ...prevFormData,
            hobbies,
          };
        });
      } else {
        // For other checkboxes and form fields
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: checked, // For checkboxes (like subscribe, contactSoon, etc.)
        }));
      }
    } else {
      // For text inputs, radios, select fields, etc.
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value, // Update the value for inputs and select fields
      }));
    }
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the data string for the alert
    let alertMessage = `
      Name: ${formData.name}
      Email: ${formData.email}
      Message: ${formData.message}
      Preferred Contact Method: ${formData.contactMethod}
      Subscribed to Newsletter: ${formData.subscribe ? "Yes" : "No"}
      Contact me soon: ${formData.contactSoon ? "Yes" : "No"}
      Another Option: ${formData.anotherOption ? "Yes" : "No"}
      Inquiry Type: ${formData.inquiryType}
      Hobbies: ${formData.hobbies.length > 0 ? formData.hobbies.join(", ") : "None"}
      ${formData.attachment ? `Attachment: ${formData.attachment.name}` : ""}
    `;

    // Show the form data in a browser alert dialog
    window.alert(alertMessage);
  };

  return (
    <Container className="mt-4">
      <h1 className="text-center">Contact Me</h1>
      <Form onSubmit={handleSubmit}>
        {/* Text Input for Name */}
        <Form.Group>
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} />
        </Form.Group>

        {/* Text Input for Email */}
        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} />
        </Form.Group>

        {/* Textarea for Message */}
        <Form.Group>
          <Form.Label>Message:</Form.Label>
          <Form.Control as="textarea" name="message" value={formData.message} onChange={handleChange} />
        </Form.Group>

        {/* Submit Button */}
        <Button type="submit" className="mt-3" variant="primary">
          Send
        </Button>
      </Form>
    </Container>
  );
}

export default Contact;
