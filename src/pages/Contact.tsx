import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";

const Contact: React.FC = () => (
  <section
    id="contact"
    className="py-20 bg-white transition-colors duration-300 relative overflow-hidden"
  >
    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Get In Touch</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Feel free to reach out for collaborations or just a friendly hello
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="hidden md:block space-y-4" data-aos="fade-right">
          <ContactInfo
            icon={
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            }
            title="Email"
            description="rifamaulana243@gmail.com"
            bgColor="bg-blue-100"
            iconColor="text-blue-600"
          />
          <ContactInfo
            icon={
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            }
            title="Phone"
            description="+62 895-3261-43968"
            bgColor="bg-green-100"
            iconColor="text-green-600"
          />
          <ContactInfo
            icon={
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
            }
            title="Location"
            description="Cianjur, Indonesia"
            bgColor="bg-purple-100"
            iconColor="text-purple-600"
          />
        </div>
        <ContactForm />
      </div>
    </div>
  </section>
);

export default Contact;
