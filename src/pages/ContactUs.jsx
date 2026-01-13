import React, { useState } from 'react';
import Container from '@/components/Container.jsx';
import useIntersectionVisible from "@/hooks/useIntersectionVisible";
import { LuMail, LuPhone, LuMapPin, LuSend } from "react-icons/lu";

const ContactUs = () => {
  const { ref: sectionRef, isVisible } = useIntersectionVisible({ threshold: 0.1 });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Add logic to handle form submission here
  };

  return (
    <div className="bg-white text-black min-h-screen py-20">
      <Container>
        <div 
          ref={sectionRef}
          className={`flex flex-col md:flex-row gap-16 justify-between transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          {/* Left Side: Contact Info */}
          <div className="md:w-1/2 space-y-12">
            <div>
              <h1 className="text-xl font-bold  mb-6">GET IN <br /><span className="text-gray-400">TOUCH.</span></h1>
              <p className="text-gray-600 leading-relaxed">
                Have a specific project in mind or just want to explore how data can transform your business? We're here to help.
              </p>
            </div>

            <div className="space-y-8 ">
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-black group-hover:text-white transition-all">
                  <LuMail className="text-md" />
                </div>
                <div>
                  <p className="text-xs uppercase  text-gray-400 font-bold">Email us</p>
                  <p className="font-medium">hello@sciobyte.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-black group-hover:text-white transition-all">
                  <LuPhone className="text-md" />
                </div>
                <div>
                  <p className="text-xs uppercase  text-gray-400 font-bold">Call us</p>
                  <p className="font-medium">+91 (73549 62791</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-black group-hover:text-white transition-all">
                  <LuMapPin className="text-md" />
                </div>
                <div>
                  <p className="text-xs uppercase  text-gray-400 font-bold">Visit us</p>
                  <p className="font-medium">Pune, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="md:w-1/2">
            {submitted ? (
              <div className="bg-gray-50 p-12 rounded-2xl text-center border border-gray-100 h-full flex flex-col justify-center items-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-4">Message Received!</h2>
                <p className="text-gray-600">Our team will get back to you within 24 hours.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-sm font-bold underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 w-full">
                <div className="flex flex-col  gap-4 w-full">
                  <div className="space-y-2 w-full">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-gray-50 border-b border-gray-200 p-4 focus:border-black outline-none transition-all"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2 w-full">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                    <input 
                      type="email" 
                      required
                      className="w-full bg-gray-50 border-b border-gray-200 p-4 focus:border-black outline-none transition-all"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-2 w-full">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Subject</label>
                  <select className="w-full bg-gray-50 border-b border-gray-200 p-4 focus:border-black outline-none transition-all appearance-none cursor-pointer">
                    <option>Data Analytics Inquiry</option>
                    <option>Custom Software Development</option>
                    <option>Consulting & Strategy</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2 w-full">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Message</label>
                  <textarea 
                    rows="5"
                    required
                    className="w-full bg-gray-50 border-b border-gray-200 p-4 focus:border-black outline-none transition-all resize-none"
                    placeholder="Send us a message..."
                  />
                </div>

                <button 
                  type="submit"
                  className="md:text-base text-sm px-4 py-2 border-2 border-black bg-black hover:bg-transparent rounded-lg hover:text-black text-white transition-colors m-auto w-fit group flex flex-row items-center gap-2 "
                >
                  <p>Send Message</p>
                  <LuSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Google Maps Section */}
        <div 
          className={`mt-20 w-full transition-all duration-1000 delay-300 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.2502428230764!2d73.80186089472004!3d18.552545503893487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfda981b0253%3A0x85c500c4836e5e95!2sSciobyte!5e1!3m2!1sen!2snp!4v1768274733987!5m2!1sen!2snp" className="w-full h-[400px] rounded-md shadow-lg border-0 grayscale hover:grayscale-0 transition-all duration-500"
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"></iframe>
          
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;