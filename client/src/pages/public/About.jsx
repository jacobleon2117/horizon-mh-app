import React from "react";
import { Shield, Heart, Users, BookOpen } from "lucide-react";
import Footer from "@/components/common/footer/Footer";

const About = () => {
  const missionValues = [
    {
      icon: <Shield className="w-8 h-8 text-[rgb(129,136,151)]" />,
      title: "Our Mission",
      description:
        "To provide accessible, compassionate mental health support that empowers individuals to thrive.",
    },
    {
      icon: <Heart className="w-8 h-8 text-[rgb(129,136,151)]" />,
      title: "Our Values",
      description:
        "Empathy, confidentiality, personalized care, and continuous support are at the core of our approach.",
    },
    {
      icon: <Users className="w-8 h-8 text-[rgb(129,136,151)]" />,
      title: "Our Approach",
      description:
        "We believe in holistic mental wellness, combining professional therapy with comprehensive resources.",
    },
  ];

  return (
    <div className="bg-white">
      <div className="bg-[rgb(26,55,91)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            About <span className="text-[rgb(129,136,151)]">Horizon</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Dedicated to supporting your mental health journey with compassion
            and expertise
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {missionValues.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-[rgb(26,55,91)] bg-opacity-10 p-3 rounded-lg">
                    {item.icon}
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-[rgb(26,55,91)]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
