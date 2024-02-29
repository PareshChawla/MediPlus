import React from 'react';
import EmailJS from 'emailjs-com';

function ContactForm() {
    const sendEmail = (recipient, subject, body) => {
        EmailJS.send("service_x4b897f", "template_kyjlmsm", {
            name: body.name,
            email: body.email,
            mobile: body.mobile,
            message: body.message
        })
            .then(function (response) {
                console.log("Message sent successfully:", response);

                alert("Your message has been sent successfully. Thank you!");
            })
            .catch(function (error) {
                console.error("Error sending message:", error);

                alert("An error occurred while sending your message. Please try again later.");
            });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        const messageBody = {
            name: formData.get('name'),
            email: formData.get('email'),
            mobile: formData.get('mobile'),
            message: formData.get('message')
        };

        sendEmail("tech@entrepreneurshipnetwork.net", "New Message", messageBody);

        event.target.reset();
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input className="w-full p-2" type="text" name="name" placeholder="Name" required />
            <input className="w-full p-2" type="email" name="email" placeholder="Email" required />
            <input className="w-full p-2" type="tel" name="mobile" placeholder="Mobile Number" required />
            <textarea className="w-full p-2" name="message" placeholder="Message" required></textarea>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Send Message
            </button>
        </form>
    );
}

export default ContactForm;
