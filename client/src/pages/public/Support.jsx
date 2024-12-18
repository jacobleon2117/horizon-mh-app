import React from "react";
import { Phone, MessageCircle, Mail, Clock } from "lucide-react";
import Footer from "@/components/common/footer/Footer";

const Support = () => {
  const supportChannels = [
    {
      icon: <Phone className="w-8 h-8 text-[rgb(129,136,151)]" />,
      title: "Phone Support",
      description: "Immediate assistance through our dedicated helpline",
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-[rgb(129,136,151)]" />,
      title: "Live Chat",
      description: "Real-time support from our compassionate team",
    },
    {
      icon: <Mail className="w-8 h-8 text-[rgb(129,136,151)]" />,
      title: "Email Support",
      description: "Detailed support and resources via email",
    },
    {
      icon: <Clock className="w-8 h-8 text-[rgb(129,136,151)]" />,
      title: "24/7 Availability",
      description: "Support when you need it most, day or night",
    },
  ];

  return (
    <div className="bg-white">
      <div className="bg-[rgb(26,55,91)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Support <span className="text-[rgb(129,136,151)]">Services</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            We're here to support you every step of your mental health journey
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {supportChannels.map((channel, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-[rgb(26,55,91)] bg-opacity-10 p-3 rounded-lg">
                    {channel.icon}
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-[rgb(26,55,91)]">
                    {channel.title}
                  </h3>
                </div>
                <p className="text-gray-600">{channel.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Support;
