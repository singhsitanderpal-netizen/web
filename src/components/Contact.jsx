import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/contact', formData);
      if (res.data.success) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (err) {
      setStatus('Failed to send message.');
    }

    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} rows="4" required />
        <button type="submit" style={{ backgroundColor: '#ff416c', color: '#fff', padding: '10px' }}>Send Message</button>
      </form>
      {status && <p style={{ color: 'green', textAlign: 'center', marginTop: '10px' }}>{status}</p>}
    </div>
  );
}

export default Contact;
