import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Footer from "@/components/common/footer/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-white">
      <div className="bg-[rgb(26,55,91)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Contact <span className="text-[rgb(129,136,151)]">Us</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            We're here to listen and support you
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[rgb(26,55,91)] mb-6">
                Get in Touch
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(26,55,91)]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(26,55,91)]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(26,55,91)]"
                    rows="4"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[rgb(26,55,91)] text-white px-8 py-3 rounded-lg hover:bg-[rgb(129,136,151)] transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[rgb(26,55,91)] mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-[rgb(129,136,151)] mr-4" />
                  <span>support@horizonmh.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-[rgb(129,136,151)] mr-4" />
                  <span>1-800-HORIZON</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-[rgb(129,136,151)] mr-4" />
                  <span>123 Mental Health Lane, Wellness City</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
