import emailjs from 'emailjs-com';

const sendEmail = () => {
  const serviceID = 'your_service_id'; // EmailJS'den alınan servis kimliği
  const templateID = 'your_template_id'; // EmailJS'den alınan şablon kimliği
  const userID = 'your_user_id'; // EmailJS'den alınan kullanıcı kimliği

  emailjs.init(userID);

  emailjs.send(serviceID, templateID, {
    to_email: 'receiver@example.com', // Alıcı e-posta adresi
    message: 'Bu bir test mesajıdır.' // E-posta içeriği
  })
  .then((response) => {
    console.log('E-posta gönderildi:', response);
  })
  .catch((error) => {
    console.error('E-posta gönderme hatası:', error);
  });
};

sendEmail(); // E-posta gönderme işlemini başlat

