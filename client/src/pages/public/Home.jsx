import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import Footer from "@/components/common/footer/Footer";
import {
  UserCheck,
  Heart,
  Shield,
  MessageSquare,
  Calendar,
  BookOpen,
  Users,
  Clock,
  Sparkles,
  ChevronDown,
  Video,
  FileText,
  Newspaper,
} from "lucide-react";

const LandingPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [openFeature, setOpenFeature] = useState(null);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleGetStartedClick = () => {
    if (!user) {
      navigate("/login");
    } else {
      navigate("/dashboard");
    }
  };

  const features = [
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Online Therapy Sessions",
      description:
        "Connect with licensed therapists through secure video calls and messaging.",
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Flexible Scheduling",
      description:
        "Book appointments that fit your schedule with our easy-to-use calendar system.",
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Resource Library",
      description:
        "Access a comprehensive library of mental health resources and self-help materials.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Support Groups",
      description:
        "Join moderated group sessions with others who share similar experiences.",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "24/7 Support",
      description:
        "Get help whenever you need it with our around-the-clock support system.",
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Personalized Care",
      description:
        "Receive tailored treatment plans based on your unique needs and goals.",
    },
  ];

  const values = [
    {
      icon: <UserCheck className="w-6 h-6 text-[rgb(129,136,151)]" />,
      title: "Professional Support",
      description:
        "Connect with licensed therapists who understand your unique journey and provide personalized guidance.",
    },
    {
      icon: <Shield className="w-6 h-6 text-[rgb(129,136,151)]" />,
      title: "Safe Space",
      description:
        "Your privacy and security are our top priorities. Feel safe sharing your thoughts in our confidential environment.",
    },
    {
      icon: <Heart className="w-6 h-6 text-[rgb(129,136,151)]" />,
      title: "Compassionate Care",
      description:
        "Experience understanding and empathy in every interaction as we support your mental health journey.",
    },
  ];

  const resources = [
    {
      icon: <BookOpen className="w-6 h-6 text-[rgb(129,136,151)]" />,
      title: "Educational Articles",
      description:
        "In-depth articles and guides on various mental health topics written by professionals.",
      linkText: "Browse Articles",
    },
    {
      icon: <Video className="w-6 h-6 text-[rgb(129,136,151)]" />,
      title: "Video Resources",
      description:
        "Expert talks, therapeutic exercises, and guided meditation sessions.",
      linkText: "Watch Videos",
    },
    {
      icon: <FileText className="w-6 h-6 text-[rgb(129,136,151)]" />,
      title: "Worksheets & Exercises",
      description:
        "Downloadable materials to support your mental health journey.",
      linkText: "Get Resources",
    },
    {
      icon: <Newspaper className="w-6 h-6 text-[rgb(129,136,151)]" />,
      title: "Latest Research",
      description:
        "Stay informed with the latest developments in mental health research.",
      linkText: "Read Updates",
    },
  ];

  const handleFeatureClick = (index) => {
    setOpenFeature(openFeature === index ? null : index);
  };

  return (
    <>
      <div className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/home-hero-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            <span className="text-white">A Brighter </span>
            <span className="bg-gradient-to-r from-[rgb(26,55,91)] via-[rgb(26,55,91)] to-[rgb(37,39,54)] text-transparent bg-clip-text font-extrabold">
              Horizon
            </span>
            <span className="text-white"> Ahead</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Connect with licensed therapists, access resources, and take control
            of your mental health journey with personalized support.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {user ? (
              <Link
                to="/dashboard"
                className="bg-[rgb(26,55,91)] text-white px-8 py-3 rounded-lg hover:bg-[rgb(129,136,151)] transition-all duration-300 text-base font-medium shadow-lg hover:shadow-xl"
              >
                Go to Dashboard
              </Link>
            ) : (
              <>
                <button
                  onClick={handleGetStartedClick}
                  className="bg-[rgb(26,55,91)] text-white px-8 py-3 rounded-lg hover:bg-[rgb(129,136,151)] transition-all duration-300 text-base font-medium shadow-lg hover:shadow-xl"
                >
                  Get Started
                </button>
                <Link
                  to="#features"
                  className="bg-white/30 backdrop-blur-sm text-white px-8 py-3 rounded-lg hover:bg-white/20 transition-all duration-300 text-base font-medium border border-white/30"
                >
                  Learn More
                </Link>
              </>
            )}
          </div>
        </div>

        <button
          onClick={scrollToNextSection}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          aria-label="Scroll to next section"
        >
          <ChevronDown
            className="w-9 h-9 text-white hover:text-[rgb(129,136,151)]"
            strokeWidth={2}
          />
        </button>
      </div>

      <section
        id="about-section"
        className="py-20 bg-[rgb(26,55,91)] bg-opacity-5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[rgb(26,55,91)] mb-4">
              About <span className="text-[rgb(129,136,151)]">Horizon</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We're committed to making mental healthcare accessible,
              personalized, and effective for everyone. Our platform connects
              you with the support you need, when you need it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-[rgb(26,55,91)] bg-opacity-10 p-2 rounded-lg group-hover:bg-opacity-20 transition-all duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[rgb(26,55,91)] ml-4">
                    {value.title}
                  </h3>
                </div>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="bg-[rgb(26,55,91)] text-white px-8 py-3 rounded-xl hover:bg-[rgb(129,136,151)] transition-colors duration-300 text-lg font-medium">
              Learn More About Us
            </button>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-white flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[rgb(26,55,91)] mb-4">
                Features that{" "}
                <span className="text-[rgb(129,136,151)]">
                  Support Your Journey
                </span>
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Our platform is designed to provide comprehensive mental health
                support through various features and tools. Each element is
                carefully crafted to ensure you receive the best possible care
                and support on your wellness journey.
              </p>
              <p className="text-gray-600 mb-6">
                From professional therapy sessions to 24/7 support, our features
                work together to create a supportive environment for your mental
                health needs. Explore our key features to learn how we can help
                you on your path to wellness.
              </p>
              <button className="bg-[rgb(26,55,91)] text-white px-8 py-3 rounded-xl hover:bg-[rgb(129,136,151)] transition-colors duration-300 text-base font-medium">
                Explore All Features
              </button>
            </div>

            <div className="h-[600px]">
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => handleFeatureClick(index)}
                      className="w-full p-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-300"
                    >
                      <div className="flex items-center">
                        <div className="bg-[rgb(26,55,91)] bg-opacity-10 p-2 rounded-lg">
                          <div className="text-[rgb(129,136,151)]">
                            {feature.icon}
                          </div>
                        </div>
                        <h3 className="text-base font-semibold text-[rgb(26,55,91)] ml-3">
                          {feature.title}
                        </h3>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-[rgb(129,136,151)] transform transition-transform duration-300 ${
                          openFeature === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`transition-all duration-300 ease-in-out ${
                        openFeature === index
                          ? "max-h-32 opacity-100"
                          : "max-h-0 opacity-0"
                      } overflow-hidden`}
                    >
                      <p className="px-4 pb-4 text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[rgb(26,55,91)] bg-opacity-5 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {resources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 cursor-pointer"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-[rgb(26,55,91)] bg-opacity-10 p-2 rounded-lg group-hover:bg-opacity-20 transition-all duration-300">
                      {resource.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-[rgb(26,55,91)] ml-4">
                      {resource.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <a
                    href="#"
                    className="inline-block text-[rgb(129,136,151)] hover:text-[rgb(26,55,91)] font-medium transition-colors duration-300"
                  >
                    {resource.linkText} →
                  </a>
                </div>
              ))}
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold text-[rgb(26,55,91)] mb-4">
                  Helpful{" "}
                  <span className="text-[rgb(129,136,151)]">Resources</span>
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  Access our comprehensive collection of mental health resources
                  designed to support your wellbeing.
                </p>
                <p className="text-gray-600 mb-8">
                  From educational articles to interactive exercises, our
                  resources are carefully curated to provide you with valuable
                  insights and practical tools for your mental health journey.
                </p>
              </div>

              <div className="bg-[rgb(26,55,91)] rounded-xl p-8">
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Need More Resources?
                  </h3>
                  <p className="text-gray-200 mb-6">
                    Our resource library is constantly growing. Sign up to get
                    notified when new materials are added.
                  </p>
                  <button className="bg-white text-[rgb(26,55,91)] px-8 py-3 rounded-xl hover:bg-[rgb(129,136,151)] hover:text-white transition-colors duration-300 text-base font-medium self-start">
                    View All Resources
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default LandingPage;
