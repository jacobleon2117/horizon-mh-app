import React from "react";
import { BookOpen, Video, FileText, Newspaper } from "lucide-react";
import Footer from "@/components/common/footer/Footer";

const Resources = () => {
  const resourceCategories = [
    {
      icon: <BookOpen className="w-8 h-8 text-[rgb(129,136,151)]" />,
      title: "Educational Articles",
      description: "In-depth guides and insights into mental health topics",
    },
    {
      icon: <Video className="w-8 h-8 text-[rgb(129,136,151)]" />,
      title: "Video Resources",
      description: "Expert talks and guided therapeutic sessions",
    },
    {
      icon: <FileText className="w-8 h-8 text-[rgb(129,136,151)]" />,
      title: "Worksheets",
      description: "Interactive tools for personal growth and reflection",
    },
    {
      icon: <Newspaper className="w-8 h-8 text-[rgb(129,136,151)]" />,
      title: "Research Updates",
      description: "Latest developments in mental health research",
    },
  ];

  return (
    <div className="bg-white">
      <div className="bg-[rgb(26,55,91)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Mental Health{" "}
            <span className="text-[rgb(129,136,151)]">Resources</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Comprehensive materials to support your mental wellness journey
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {resourceCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-[rgb(26,55,91)] bg-opacity-10 p-3 rounded-lg">
                    {category.icon}
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-[rgb(26,55,91)]">
                    {category.title}
                  </h3>
                </div>
                <p className="text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Resources;
