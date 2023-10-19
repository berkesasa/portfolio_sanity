"use client"
import { useState } from 'react';

export default function Form() {
    // Form verilerini saklamak için state tanımlayın
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        email: '',
        tel: '',
        message: '',
    });

    // Form verileri güncellemek için bir işlev tanımlayın
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Form gönderildiğinde yapılacak işlemleri tanımlayın
    const handleSubmit = (e) => {
        e.preventDefault();
        // Form verilerini kullanarak istediğiniz işlemi yapabilirsiniz
        console.log(formData);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='grid md:grid-cols-2 gap-5 mb-5'>
                    <div>
                        <input
                            className='sasa-form'
                            placeholder='Name Surname'
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input
                            className='sasa-form'
                            placeholder='Subject'
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input
                            className='sasa-form'
                            placeholder='Mail Adress'
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input
                            className='sasa-form'
                            placeholder='Phone Number'
                            type="tel"
                            name="tel"
                            value={formData.tel}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='sasa-form-message-container'>
                        <textarea
                            className='sasa-form-message'
                            placeholder='Your Message'
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                </div>
                <button
                    className='sasa-form-submit'
                    type="submit">Submit</button>
            </form>
        </>
    );
}
