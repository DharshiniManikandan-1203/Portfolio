
import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    // Handle input change
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple validation
        if (!form.name || !form.email.includes('@') || !form.message) {
            alert('Please fill in all fields with valid info.');
            return;
        }

        console.log('Message sent:', form); // Simulate "sending"
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' });
    };

    return (
        <section className="page-section" id="contact">
            <h2 className="contact-title">Contact Me</h2>

            {submitted && <p className="contact-success">✅ Message sent successfully!</p>}

            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />

                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Send Message</button>
            </form>
        </section>
    );
}
