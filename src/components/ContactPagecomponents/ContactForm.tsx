import { useState, useEffect, type FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { getDatabase, ref, push, set } from "firebase/database";
import { app } from "../../pages/ContactPage/firebase";

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().optional(),
});

type ContactFormInputs = z.infer<typeof contactFormSchema>;

const ContactForm: FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormInputs) => {
    try {
      const db = getDatabase(app);
      const contactRef = ref(db, "contacts"); // Firebase Realtime DB node

      const newContactRef = push(contactRef);
      await set(newContactRef, data);

      setSubmitted(true);
      reset();
    } catch (error) {
      console.error("Error saving contact data:", error);
      // Optionally, show user an error message here
    }
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-[#27272A]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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

          {submitted && (
            <div className="mb-6 p-4 bg-green-600 text-white rounded">
              Your form has been submitted. Thank you!
            </div>
          )}

          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
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
                id="firstName"
                type="text"
                {...register("firstName")}
                className={`w-full px-4 py-3 bg-[#27272A] border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white ${
                  errors.firstName ? "border-red-500" : "border-gray-600"
                }`}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.firstName.message}
                </p>
              )}
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
                id="lastName"
                type="text"
                {...register("lastName")}
                className={`w-full px-4 py-3 bg-[#27272A] border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white ${
                  errors.lastName ? "border-red-500" : "border-gray-600"
                }`}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.lastName.message}
                </p>
              )}
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
                id="email"
                type="email"
                {...register("email")}
                className={`w-full px-4 py-3 bg-[#27272A] border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white ${
                  errors.email ? "border-red-500" : "border-gray-600"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
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
                id="phone"
                type="tel"
                {...register("phone")}
                className="w-full px-4 py-3 bg-[#27272A] border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
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
                id="company"
                type="text"
                {...register("company")}
                className="w-full px-4 py-3 bg-[#27272A] border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
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
                {...register("message")}
                className="w-full px-4 py-3 bg-[#27272A] border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
              />
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
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">+1 (555) 123-4567</p>
              <p className="text-gray-400 text-sm mt-1">Monday - Friday</p>
              <p className="text-gray-400 text-sm">9:00 AM - 6:00 PM EST</p>
            </div>

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
