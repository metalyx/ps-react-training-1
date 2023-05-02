import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return (
        <div className='feedback-form-container'>
            <form className='form-contact'>
                <label htmlFor='name'>Name</label>
                <input
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor='email'>Email</label>
                <input
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor='message'>Message</label>
                <textarea
                    id='message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
            </form>
            <div className='aside'>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Message: {message}</p>
            </div>
        </div>
    );
}

export default ContactForm;
