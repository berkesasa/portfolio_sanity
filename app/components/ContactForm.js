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
                <button className='sasa-form-submit disabled:cursor-not-allowed focus:cursor-not-allowed' type="submit" disabled={emailSent || error}>
                    <div>Gönder</div>
                    <svg aria-hidden="true" class={`${emailSent || error ? '' : 'hidden'} ml-3 w-5 h-5 animate-spin text-gray-600 fill-black dark:fill-white`} viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                </button>
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
