import { FaEnvelope, FaFacebook, FaGithub, FaMapMarkerAlt, FaMediumM, FaPhoneAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { motion } from "framer-motion";
import { FormEvent, useEffect } from "react";
import Swal from 'sweetalert2';
import "../style/alert.css";

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
                    title: "Message Sent!",
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

                form.reset();
            } else {
                console.error("Failed to send message", res);
                Swal.fire({
                    title: "Failed to Send!",
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

    useEffect(() => {
        // @ts-ignore
        if (typeof AOS !== 'undefined') {
            // @ts-ignore
            AOS.init({
                duration: 1000,
                once: false,
                offset: 100,
                easing: 'ease-in-out',
            });
        }
    }, []);

    return (
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 w-full">
            <div className="container mx-auto px-4 md:px-0">
                {/* Section Title */}
                <div className="text-center mb-12" data-aos="fade-left">
                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                        CONTACT {" "}
                        <span style={{ fontFamily: "Montserrat, sans-serif", color: "#00cec9" }}>
                            ME
                        </span>
                    </h2>
                </div>

                {/* Contact Card */}
                <div 
                    className="max-w-8xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <div className="md:flex">
                        {/* Left Side - Contact Info */}
                        <div 
                            className="md:w-2/4 bg-[#00cec9] dark:bg-indigo-700 text-white p-8" 
                            style={{ backgroundColor: "#00cec9" }}
                            data-aos="fade-right"
                            data-aos-delay="300"
                        >
                            <h3 
                                className="text-2xl font-semibold mb-4" 
                                style={{ fontFamily: "Montserrat, sans-serif" }}
                                data-aos="fade-up"
                                data-aos-delay="400"
                            >
                                Contact Information
                            </h3>
                            <p 
                                className="mb-6" 
                                style={{ fontFamily: "Montserrat, sans-serif", fontWeight: "600" }}
                                data-aos="fade-up"
                                data-aos-delay="500"
                            >
                                I welcome any inquiries and would be happy to assist you. Please feel free to
                                reach out, and I will respond to your message as promptly as possible.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { icon: <FaMapMarkerAlt className="h-6 w-6 text-indigo-100" />, label: "Location", value: "Panadura, Sri Lanka" },
                                    { icon: <FaEnvelope className="h-6 w-6 text-indigo-100" />, label: "Email", value: "pamunuwayehaniharshika@gmail.com" },
                                    { icon: <FaPhoneAlt className="h-6 w-6 text-indigo-100" />, label: "Phone", value: "+9476 445 0928" },
                                ].map((item, index) => (
                                    <div 
                                        key={index} 
                                        className="flex items-start"
                                        data-aos="fade-up"
                                        data-aos-delay={600 + index * 100}
                                    >
                                        <div className="mr-4 mt-1">{item.icon}</div>
                                        <div>
                                            <p className="font-medium text-[15px]" style={{ fontFamily: "Montserrat, sans-serif" }}>
                                                {item.label}
                                            </p>
                                            <p className="text-black text-[15px]" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: "600" }}>
                                                {item.value}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div className="mt-10">
                                <p 
                                    className="font-bold mb-4 text-[16px]" 
                                    style={{ fontFamily: "Montserrat, sans-serif" }}
                                    data-aos="fade-up"
                                    data-aos-delay="900"
                                >
                                    Follow me on,
                                </p>
                                <div className="flex space-x-4">
                                    {[
                                        { href: "https://www.linkedin.com/in/yehani-harshika-pamunuwa-5b64a1283", icon: <FaLinkedinIn className="w-7 h-7" /> },
                                        { href: "https://medium.com/@pamunuwayehaniharshika", icon: <FaMediumM className="w-7 h-7" /> },
                                        { href: "https://github.com/yehaniharshika", icon: <FaGithub className="w-7 h-7" /> },
                                        { href: "https://web.facebook.com/yehani.hpamunuwa", icon: <FaFacebook className="w-7 h-7" /> },
                                    ].map((link, index) => (
                                        <motion.a
                                            key={index}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white hover:bg-white hover:text-[#00cec9] transition p-3 rounded-full border border-white/20"
                                            whileHover={{ scale: 1.2, rotate: 5 }}
                                            whileTap={{ scale: 0.9 }}
                                            data-aos="zoom-in"
                                            data-aos-delay={1000 + index * 100}
                                        >
                                            {link.icon}
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Contact Form */}
                        <div className="md:w-3/4 p-8" data-aos="fade-left" data-aos-delay="400">
                            <h3 
                                className="text-2xl font-semibold text-gray-900 dark:text-white mb-6" 
                                style={{ fontFamily: "Montserrat, sans-serif" }}
                                data-aos="fade-up"
                                data-aos-delay="500"
                            >
                                Send Me a Message
                            </h3>
                            <form onSubmit={onSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div data-aos="fade-up" data-aos-delay="600">
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Enter your name"
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:ring-[#00cec9] focus:border-[#00cec9] transition"
                                            style={{ fontFamily: "Montserrat, sans-serif", fontSize: "14px" }}
                                            required
                                        />
                                    </div>
                                    <div data-aos="fade-up" data-aos-delay="700">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
                                            Your Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:ring-[#00cec9] focus:border-[#00cec9] transition"
                                            style={{ fontFamily: "Montserrat, sans-serif", fontSize: "14px" }}
                                            required
                                        />
                                    </div>
                                </div>

                                <div data-aos="fade-up" data-aos-delay="800">
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        placeholder="Enter subject"
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:ring-[#00cec9] focus:border-[#00cec9] transition"
                                        style={{ fontFamily: "Montserrat, sans-serif", fontSize: "14px" }}
                                        required
                                    />
                                </div>

                                <div data-aos="fade-up" data-aos-delay="900">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        placeholder="Enter your message"
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:ring-[#00cec9] focus:border-[#00cec9] transition resize-none"
                                        style={{ fontFamily: "Montserrat, sans-serif", fontSize: "14px" }}
                                        required
                                    ></textarea>
                                </div>

                                <div data-aos="fade-up" data-aos-delay="1000">
                                    <button
                                        type="submit"
                                        className="px-8 py-3 bg-[#00cec9] text-white font-bold rounded-md hover:bg-[#00b8b3] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                                        style={{ fontFamily: "Montserrat, sans-serif" }}
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