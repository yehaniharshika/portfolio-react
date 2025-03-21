import React, { useState } from "react";
import {
    FaEnvelope,
    FaFacebook,
    FaGithub,
    FaMapMarkerAlt,
    FaMediumM,
    FaPhoneAlt
} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa6";
import { motion } from "framer-motion";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        subject: "",
        email: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Thank you for your message! I will get back to you soon.");
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
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
                <div className="max-w-7xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
                    <div className="md:flex">
                        <div className="md:w-1/3 bg-[#00cec9] dark:bg-indigo-700 text-white p-8"
                             style={{backgroundColor: "#00cec9"}}>
                            <h3 className="text-2xl font-semibold mb-4"
                                style={{fontFamily: "Montserrat, sans-serif"}}>Contact Information</h3>
                            <p className="mb-6" style={{fontFamily: "Montserrat, sans-serif", fontWeight: "600"}}>
                                I welcome any inquiries and would be happy to assist you. Please feel free to
                                reach out, and I will respond to your message as promptly as possible.
                            </p>

                            <motion.div
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.8, ease: "easeOut"}}
                            >
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <FaMapMarkerAlt className="h-6 w-6 mr-3 mt-1 text-indigo-200"/>
                                        <div>
                                            <p className="font-medium"
                                               style={{fontFamily: "Montserrat, sans-serif"}}>Location</p>
                                            <p className="text-black" style={{
                                                fontFamily: "Montserrat, sans-serif",
                                                fontWeight: "600",
                                                fontSize: "14px"
                                            }}>Polonnaruwa, Sri Lanka</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <FaEnvelope className="h-6 w-6 mr-3 mt-1 text-indigo-200"/>
                                        <div>
                                            <p className="font-medium"
                                               style={{fontFamily: "Montserrat, sans-serif"}}>Email</p>
                                            <p className="text-black" style={{
                                                fontFamily: "Montserrat, sans-serif",
                                                fontWeight: "600",
                                                fontSize: "14px"
                                            }}>pamunuwayehaniharshika@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <FaPhoneAlt className="h-6 w-6 mr-3 mt-1 text-indigo-200"/>
                                        <div>
                                            <p className="font-medium"
                                               style={{fontFamily: "Montserrat, sans-serif"}}>Phone</p>
                                            <p className="text-black" style={{
                                                fontFamily: "Montserrat, sans-serif",
                                                fontWeight: "600",
                                                fontSize: "14px"
                                            }}>+9476 445 0928</p>
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
                                                icon: <FaLinkedinIn className="w-6 h-6"/>,
                                            },
                                            {
                                                href: "https://medium.com/@pamunuwayehaniharshika",
                                                icon: <FaMediumM className="w-6 h-6"/>,
                                            },
                                            {
                                                href: "https://github.com/yehaniharshika",
                                                icon: <FaGithub className="w-6 h-6"/>,
                                            },
                                            {
                                                href: "https://web.facebook.com/yehani.hpamunuwa",
                                                icon: <FaFacebook className="w-6 h-6"/>,
                                            },
                                        ].map((link, index) => (
                                            <motion.a
                                                key={index}
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white hover:bg-white hover:text-[#00cec9] transition p-2 rounded-full"
                                                whileHover={{scale: 1.1}}
                                                whileTap={{scale: 0.9}}
                                            >
                                                {link.icon}
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <div className="md:w-3/4  p-8">
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6"
                                style={{fontFamily: "Montserrat, sans-serif"}}>
                                Send Me a Message
                            </h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                            style={{fontFamily: "Montserrat, sans-serif"}}>
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Enter your name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                            style={{fontFamily: "Montserrat, sans-serif",fontSize:"13px"}}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                            style={{fontFamily: "Montserrat, sans-serif"}}
                                        >
                                            Your Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            style={{fontFamily: "Montserrat, sans-serif",fontSize:"13px"}}
                                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="subject"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                        style={{fontFamily: "Montserrat, sans-serif"}}
                                    >
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        placeholder="Enter subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        style={{fontFamily: "Montserrat, sans-serif",fontSize:"13px"}}
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                        style={{fontFamily: "Montserrat, sans-serif"}}
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Enter your message"
                                        style={{fontFamily: "Montserrat, sans-serif",fontSize:"13px"}}
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                        required
                                    ></textarea>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="px-6 py-3 bg-[#00cec9] text-white font-medium rounded-md hover:bg-[#00cec9] transition-colors"
                                        style={{fontFamily: "Montserrat, sans-serif",maxWidth:"200px",cursor:"pointer"}}
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
