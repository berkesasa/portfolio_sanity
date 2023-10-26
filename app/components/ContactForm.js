"use client"
import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';


export default function Form() {
    const [formData, setFormData] = useState({
        user_name: '',
        subject: '',
        email: '',
        tel: '',
        message: '',
    });

    const [emailSent, setEmailSent] = useState();
    const [error, setError] = useState('');

    useEffect(() => {
        if (emailSent) {
            setTimeout(() => {
                setEmailSent(false);
            }, 7800);
        }
    }, [emailSent]);

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                setError(false);
            }, 7800);
        }
    }, [error]);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9dkmozt', 'template_jy75ftk', form.current, 'RdYpYQx1QbWsgiKv9')
            .then((result) => {
                console.log(result.text);
                console.log("message sent");
                setFormData({
                    user_name: '',
                    subject: '',
                    email: '',
                    tel: '',
                    message: '',
                });
                form.current.reset();
                setEmailSent(true);
            });
    };

    return (
        <div>
            <form ref={form} onSubmit={sendEmail}>
                <div className='grid md:grid-cols-2 gap-5 mb-5'>
                    <div>
                        <input
                            className='sasa-form'
                            placeholder='Name Surname'
                            type="text"
                            name="user_name"
                            value={formData.user_name}
                            onChange={(e) => setFormData({ ...formData, user_name: e.target.value })}
                        />
                    </div>
                    <div>
                        <input
                            className='sasa-form'
                            placeholder='Subject'
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        />
                    </div>
                    <div>
                        <input
                            className='sasa-form'
                            placeholder='Mail Adress'
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                    <div>
                        <input
                            className='sasa-form'
                            placeholder='Phone Number'
                            type="tel"
                            name="tel"
                            value={formData.tel}
                            onChange={(e) => setFormData({ ...formData, tel: e.target.value })}
                        />
                    </div>
                    <div className='sasa-form-message-container'>
                        <textarea
                            className='sasa-form-message'
                            placeholder='Your Message'
                            name="message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        ></textarea>
                    </div>
                </div>
                <button className='sasa-form-submit' type="submit">Gönder</button>
            </form>
            {emailSent && <div>
                <div className='fixed bottom-10 right-10 !bg-white rounded-2xl !z-50 p-7 overflow-hidden'>
                    <div className='flex items-center space-x-3 relative'>
                        <div>
                            <svg className='w-6 h-6 fill-green-700' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z" /></svg>
                        </div>
                        <div className='!text-black'>Your message was sent successfully!</div>

                    </div>
                    <motion.div
                        initial={{ width: '100%' }}
                        animate={{ width: '0%' }}
                        exit={{ width: '0%' }}
                        transition={{ duration: 8 }}
                        className='h-[5px] bg-sasaGreenDM absolute top-0 left-0'
                    />
                </div>
            </div>}
            {error &&
                <div className='fixed bottom-10 right-10 !bg-white rounded-2xl !z-50 p-7 overflow-hidden'>
                    <div className='flex items-center space-x-3 relative'>
                        <div>
                            <svg className='w-6 h-6 fill-red-600' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.597 17.954l-4.591-4.55-4.555 4.596-1.405-1.405 4.547-4.592-4.593-4.552 1.405-1.405 4.588 4.543 4.545-4.589 1.416 1.403-4.546 4.587 4.592 4.548-1.403 1.416z" /></svg>
                        </div>
                        <div className='!text-black'>Your message could not be sent!</div>
                    </div>
                    <motion.div
                        initial={{ width: '100%' }}
                        animate={{ width: '0%' }}
                        exit={{ width: '0%' }}
                        transition={{ duration: 8 }}
                        className='h-[5px] bg-red-600 absolute top-0 left-0'
                    />
                </div>
            }
        </div>
    );
}
