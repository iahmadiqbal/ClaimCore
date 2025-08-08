import type { FC, FormEvent } from "react";

const ContactForm: FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can handle form submission logic here
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-[#27272A]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Contact Form */}
        <div className="lg:col-span-2 bg-[#3f3f46] rounded-xl shadow-lg p-6 md:p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[#FA7533] mb-2">
              Get in Touch
            </h2>
            <p className="text-gray-300">
              Ready to transform your claims process? <br />
              Contact our team for a personalized consultation.
            </p>
          </div>

          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            onSubmit={handleSubmit}
          >
            {/* First Name */}
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full px-4 py-3 bg-[#27272A] border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                placeholder="John"
              />
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full px-4 py-3 bg-[#27272A] border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                placeholder="Doe"
              />
            </div>

            {/* Email */}
            <div className="md:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-[#27272A] border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                placeholder="john@company.com"
              />
            </div>

            {/* Phone */}
            <div className="md:col-span-2">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 bg-[#27272A] border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                placeholder="(555) 123-4567"
              />
            </div>

            {/* Company */}
            <div className="md:col-span-2">
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                className="w-full px-4 py-3 bg-[#27272A] border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                placeholder="Your Company Name"
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 bg-[#27272A] border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                placeholder="Tell us about your needs..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-[#FA7533] hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Right Column - Contact Info */}
        <div className="bg-[#3f3f46] rounded-xl shadow-lg p-6 md:p-8">
          {/* Office Address */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">
              Our Office
            </h3>
            <p className="text-gray-300 mb-2">123 Business Ave</p>
            <p className="text-gray-300 mb-2">Suite 100</p>
            <p className="text-gray-300 mb-4">New York, NY 10001</p>

            {/* Map Placeholder */}
            <div className="bg-gray-800 border border-gray-700 rounded-xl w-full h-48 flex items-center justify-center text-gray-400 relative">
              Interactive Map Component
              <div className="absolute text-center text-sm mt-24 text-gray-400">
                123 Business Ave, Suite 100, New York, NY 10001
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            {/* Phone */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">+1 (555) 123-4567</p>
              <p className="text-gray-400 text-sm mt-1">Monday - Friday</p>
              <p className="text-gray-400 text-sm">9:00 AM - 6:00 PM EST</p>
            </div>

            {/* Email */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <ul className="text-gray-300 space-y-1">
                <li>info@claimcore.com</li>
                <li>support@claimcore.com</li>
                <li>sales@claimcore.com</li>
              </ul>
            </div>
          </div>

          {/* Support Section */}
          <div className="mt-10 pt-8 border-t border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4">
              Need Support?
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#27272A] p-4 rounded-lg">
                <div className="text-blue-400 font-semibold mb-1">
                  24/7 Support
                </div>
                <p className="text-sm text-gray-300">
                  Round-the-clock assistance
                </p>
              </div>
              <div className="bg-[#27272A] p-4 rounded-lg">
                <div className="text-blue-400 font-semibold mb-1">
                  Documentation
                </div>
                <p className="text-sm text-gray-300">Comprehensive guides</p>
              </div>
              <div className="bg-[#27272A] p-4 rounded-lg">
                <div className="text-blue-400 font-semibold mb-1">
                  Video Tutorials
                </div>
                <p className="text-sm text-gray-300">
                  Step-by-step walkthroughs
                </p>
              </div>
              <div className="bg-[#27272A] p-4 rounded-lg">
                <div className="text-blue-400 font-semibold mb-1">
                  Live Chat
                </div>
                <p className="text-sm text-gray-300">Instant help available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
