// // components/ContactForm.jsx
// import React, { useState } from 'react';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData({
//       ...formData,
//       [id]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     // Here you would typically send the form data to a server
//     alert('Message sent successfully!');
//     setFormData({
//       name: '',
//       email: '',
//       subject: '',
//       message: ''
//     });
//   };

//   return (
//     <div className="contact-form">
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Name</label>
//           <input 
//             type="text" 
//             id="name" 
//             className="form-control" 
//             value={formData.name}
//             onChange={handleChange}
//             required 
//           />
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input 
//             type="email" 
//             id="email" 
//             className="form-control" 
//             value={formData.email}
//             onChange={handleChange}
//             required 
//           />
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="subject">Subject</label>
//           <input 
//             type="text" 
//             id="subject" 
//             className="form-control" 
//             value={formData.subject}
//             onChange={handleChange}
//             required 
//           />
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="message">Message</label>
//           <textarea 
//             id="message" 
//             className="form-control" 
//             value={formData.message}
//             onChange={handleChange}
//             required
//           ></textarea>
//         </div>
        
//         <button type="submit" className="submit-btn">Send Message</button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;

 


// components/ContactForm.jsx
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation using Swal
    if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      return Swal.fire('Error', 'Please enter a valid name (letters only).', 'error');
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      return Swal.fire('Error', 'Please enter a valid email.', 'error');
    }

    if (formData.subject.trim() === '') {
      return Swal.fire('Error', 'Subject cannot be empty.', 'error');
    }

    if (formData.message.trim() === '') {
      return Swal.fire('Error', 'Message cannot be empty.', 'error');
    }

    try {
      const response = await fetch('https://formspree.io/f/movpvepd', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        Swal.fire({
          title: 'Message Sent!',
          text: 'Thank you for contacting me. I will respond soon.',
          icon: 'success',
          showConfirmButton: false,
          timer: 3000
        });

        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        Swal.fire('Error', 'Something went wrong! Please try again.', 'error');
      }
    } catch (error) {
      console.error(error);
      Swal.fire('Error', 'Network error. Please check your connection.', 'error');
    }
  };

  return (
    <div className="contact-form">
      <form id="contactForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name"             // added name attribute
            className="form-control" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email"           // added name attribute
            className="form-control" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input 
            type="text" 
            id="subject" 
            name="subject"         // added name attribute
            className="form-control" 
            value={formData.subject}
            onChange={handleChange}
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea 
            id="message" 
            name="message"         // added name attribute
            className="form-control" 
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
