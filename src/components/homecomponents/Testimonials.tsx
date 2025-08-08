import React from "react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "ClaimCore has revolutionized our claims processing. We've reduced processing time by 50% and improved accuracy significantly.",
    name: "Michael Chen",
    role: "Claims Manager, SafeGuard Insurance",
    image: "/images/Mich.avif",
  },
  {
    quote:
      "The mobile app is fantastic. Our field adjusters can now complete inspections on-site with all the data syncing automatically.",
    name: "Sarah Johnson",
    role: "Director of Operations, Allied Claims",
    image: "/images/Sara.jpg",
  },
  {
    quote:
      "Customer service is exceptional. The team is always responsive and the platform is incredibly reliable.",
    name: "David Rodriguez",
    role: "CEO, Premier Adjusting",
    image: "/images/David.avif",
  },
];

const StarIcon = () => (
  <svg
    className="w-5 h-5 text-yellow-400"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.455a1 1 0 00-.364 1.118l1.287 3.973c.3.922-.755 1.688-1.54 1.118L10 13.347l-3.386 2.455c-.784.57-1.838-.196-1.54-1.118l1.286-3.973a1 1 0 00-.364-1.118L3.61 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
  </svg>
);

const Testimonials: React.FC = () => {
  return (
    <section className="bg-[#27272A] text-white w-full">
      {/* Top box */}
      <div className="bg-[#27272A] text-center py-6 px-4 w-full">
        <h2 className="text-3xl font-bold" style={{ color: "#F96820" }}>
          What Our Customers Say
        </h2>
      </div>

      {/* Subheading */}
      <div className="bg-[#27272A] text-center px-4 py-4 w-full max-w-4xl mx-auto">
        <p className="text-gray-300 max-w-xl mx-auto">
          Don't just take our word for it. See what industry professionals have
          to say about ClaimCore.
        </p>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 md:grid-cols-3 sm:grid-cols-1">
          {testimonials.map(({ quote, name, role, image }, idx) => (
            <blockquote
              key={idx}
              className="p-6 rounded-lg shadow-lg flex flex-col justify-between"
              style={{ backgroundColor: "#09090B" }}
            >
              {/* Stars on top */}
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 mb-6">&ldquo;{quote}&rdquo;</p>

              {/* Profile info */}
              <footer className="flex items-center space-x-4 mt-auto">
                <img
                  src={image}
                  alt={name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{name}</p>
                  <p className="text-sm text-gray-400">{role}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#27272A] h-6 w-full"></div>
    </section>
  );
};

export default Testimonials;
