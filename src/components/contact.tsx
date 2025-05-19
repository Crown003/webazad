"use client";

import { useRef } from "react";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const scriptURL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

    if (!scriptURL) {
      console.error("Google Script URL is not defined in the environment variables.");
      return;
    }

    if (!formRef.current) return;

    try {
      const formData = new FormData(formRef.current);

      const response = await fetch(scriptURL, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Thanks for contacting us! We will get back to you soon.");
        formRef.current.reset();
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error: any) {
      console.error("Error!", error.message);
    }
  };

  return (
    <section id="contact" className="scroll-my-20 bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
          <div className="h-1 w-20 bg-amber-700 mx-auto mt-4"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Have questions about our products or want to place a custom order? Reach out to us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Send Us a Message</h3>
            <form ref={formRef} name="contact" onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              <div>
                <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone-number"
                  name="phone"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-700 text-white py-2 rounded-md font-medium hover:bg-amber-800 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="text-amber-700 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Phone</h4>
                    <p className="text-gray-600 cursor-pointer">+91 8004260555</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="text-amber-700 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <p className="text-gray-600">
                      <Link href="mailto:homegallery555@gmail.com">homegallery555@gmail.com</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Business Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday-Saturday</span>
                  <span className="font-medium text-gray-900">10:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium text-gray-900">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;