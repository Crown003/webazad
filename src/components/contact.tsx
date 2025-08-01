"use client";
import { useState } from "react";
import { Mail, Phone, X ,MapPin} from "lucide-react";
import Link from "next/link";
import contactUs from "@/actions/contact";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // 2. Generic handler for input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" }); 

    try {
      const actionFormData = new FormData();
      actionFormData.append("name", formData.name);
      actionFormData.append("phone", formData.phone);
      actionFormData.append("email", formData.email);
      actionFormData.append("message", formData.message);

      const res = await contactUs(actionFormData); 

      if (res?.successmessage) {
        setSubmitStatus({
          type: "success",
          message: res.successmessage,
        });
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: res?.errormessage || "Something went wrong, please try after sometime.",
        });
      }
    } catch (error) {
      console.error("Client-side caught an unexpected error during submission:", error);
      setSubmitStatus({
        type: "error",
        message: "Something went wrong, please try after sometime.",
      });
    } finally {
      setIsSubmitting(false);
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
            {submitStatus.type && (
              <div
                className={`p-4 mb-4 rounded-md relative ${
                  submitStatus.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                }`}
              >
                {submitStatus.message}
                <button
                  onClick={() => setSubmitStatus({ type: null, message: "" })}
                  className="absolute top-3 right-2 text-gray-500 hover:text-gray-700"
                  aria-label="Close message"
                >
                  <X size={18} />
                </button>
              </div>
            )}
            <form name="contact" onSubmit={handleSubmit} className="text-black space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name} // Bind value to state
                  onChange={handleChange} // Update state on change
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
                  value={formData.phone} // Bind value to state
                  onChange={handleChange} // Update state on change
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
                  value={formData.email} // Bind value to state
                  onChange={handleChange} // Update state on change
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
                  value={formData.message} // Bind value to state
                  onChange={handleChange} // Update state on change
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amber-700 text-white py-2 rounded-md font-medium hover:bg-amber-800 transition duration-300 disabled:bg-amber-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
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
                <div className="flex items-start">
                  <MapPin className="text-amber-700 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Address</h4>
                    <p className="text-gray-600">
                      {/* <Link href="mailto:homegallery555@gmail.com">homegallery555@gmail.com</Link> */}
                      Arjunganj (near chauhan market)
                      Lucknow,Uttar Pradesh 226002
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Business Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">All Week Days (MON-SUN)</span>
                  <span className="font-medium text-gray-900">10:00 AM - 9:00 PM</span>
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