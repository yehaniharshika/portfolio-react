import { FaEnvelope, FaFacebook, FaGithub, FaMapMarkerAlt, FaMediumM, FaPhoneAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { motion } from "framer-motion";
import { FormEvent } from "react";
import Swal from 'sweetalert2';
import "../components/style/alert.css";

export const Contact = () => {
    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

        formData.append("access_key", "417a5ac8-37b9-4690-9a88-4329eb7d691b");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            }).then((res) => res.json());

            if (res.success) {
                console.log("Success", res);
                Swal.fire({
                    title: "✅ Message Sent!",
                    html: '<p class="swal-text">Your message has been sent successfully!</p>',
                    icon: "success",
                    confirmButtonText: "OK",
                    background: "white",
                    color: "black",
                    confirmButtonColor: "#00cec9",
                    timer: 3000,
                    width: "450px",
                    customClass: {
                        title: "swal-title",
                        popup: "swal-popup",
                        confirmButton: "swal-button",
                    }
                });

                // Clear form fields after successful submission
                form.reset();
            } else {
                console.error("Failed to send message", res);
                Swal.fire({
                    title: "❌ Failed to Send!",
                    html: '<p class="swal-text">There was a problem sending your message. Please try again.</p>',
                    icon: "error",
                    confirmButtonText: "OK",
                    background: "white",
                    color: "black",
                    confirmButtonColor: "red",
                    timer: 3000,
                    width: "450px",
                    customClass: {
                        title: "swal-title",
                        popup: "swal-popup",
                        confirmButton: "swal-button",
                    }
                });
            }
        } catch (error) {
            console.error("Error sending message", error);
            alert("An error occurred. Please try again later.");
        }
    };

    return (
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 w-full">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2
                        className="text-4xl font-bold text-gray-900 dark:text-white"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                        Contact{" "}
                        <span style={{ fontFamily: "Montserrat, sans-serif", color: "#00cec9" }}>
                            Me
                        </span>
                    </h2>
                </div>
                <div className="max-w-8xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
                    <div className="md:flex">
                        <div className="md:w-2/4 bg-[#00cec9] dark:bg-indigo-700 text-white p-8" style={{backgroundColor: "#00cec9"}}>
                            <h3 className="text-2xl font-semibold mb-4" style={{fontFamily: "Montserrat, sans-serif"}}>Contact Information</h3>
                            <p className="mb-6" style={{fontFamily: "Montserrat, sans-serif", fontWeight: "600"}}>
                                I welcome any inquiries and would be happy to assist you. Please feel free to
                                reach out, and I will respond to your message as promptly as possible.
                            </p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <FaMapMarkerAlt className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-6 lg:w-6 mr-3 mt-1 text-indigo-100"/>
                                        <div>
                                            <p className="font-medium text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px]"
                                               style={{fontFamily: "Montserrat, sans-serif"}}>Location</p>
                                            <p className="text-black text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px]"
                                               style={{fontFamily: "Montserrat, sans-serif", fontWeight: "600"}}>
                                                Polonnaruwa, Sri Lanka
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <FaEnvelope className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-6 lg:w-6 mr-3 mt-1 text-indigo-100"/>
                                        <div>
                                            <p className="font-medium text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px]"
                                               style={{fontFamily: "Montserrat, sans-serif"}}>Email</p>
                                            <p className="text-black text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px]"
                                               style={{fontFamily: "Montserrat, sans-serif", fontWeight: "600"}}>
                                                pamunuwayehaniharshika@gmail.com
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <FaPhoneAlt className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-6 lg:w-6 mr-3 mt-1 text-indigo-100" />

                                        <div>
                                            <p className="font-medium text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px]"
                                               style={{fontFamily: "Montserrat, sans-serif"}}>Phone</p>
                                            <p className="text-black text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px]"
                                               style={{fontFamily: "Montserrat, sans-serif", fontWeight: "600"}}>
                                                +9476 445 0928
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <p className="font-medium mb-4" style={{
                                        fontFamily: "Montserrat, sans-serif",
                                        fontWeight: "700",
                                        fontSize: "15px"
                                    }}>Follow me on,</p>
                                    <div className="flex space-x-4">
                                        {[
                                            {
                                                href: "https://www.linkedin.com/in/yehani-harshika-pamunuwa-5b64a1283",
                                                icon: <FaLinkedinIn className="w-6 h-6"/>
                                            },
                                            {
                                                href: "https://medium.com/@pamunuwayehaniharshika",
                                                icon: <FaMediumM className="w-6 h-6"/>
                                            },
                                            {
                                                href: "https://github.com/yehaniharshika",
                                                icon: <FaGithub className="w-6 h-6"/>
                                            },
                                            {
                                                href: "https://web.facebook.com/yehani.hpamunuwa",
                                                icon: <FaFacebook className="w-6 h-6"/>
                                            },
                                        ].map((link, index) => (
                                            <motion.a
                                                key={index}
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white hover:bg-white hover:text-[#00cec9] transition p-2 rounded-full"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                {link.icon}
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <div className="md:w-3/4 p-8">
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
                                Send Me a Message
                            </h3>
                            <form onSubmit={onSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Enter your name"
                                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                            style={{ fontFamily: "Montserrat, sans-serif", fontSize: "13px" }}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
                                            Your Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            style={{ fontFamily: "Montserrat, sans-serif", fontSize: "13px" }}
                                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        placeholder="Enter subject"
                                        style={{ fontFamily: "Montserrat, sans-serif", fontSize: "13px" }}
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        placeholder="Enter your message"
                                        style={{ fontFamily: "Montserrat, sans-serif", fontSize: "13px" }}
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                        required
                                    ></textarea>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="px-6 py-3 bg-[#00cec9] text-white font-medium rounded-md hover:bg-[#00cec9] transition-colors"
                                        style={{ fontFamily: "Montserrat, sans-serif", maxWidth: "200px", cursor: "pointer" }}
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
