import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
const Contact = () => {
  return (
    <section id="contact" className="bg-dark py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Get in Touch</h2>
          <p className="mt-4 text-xl text-gray-300">
            Have questions? We'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
          <div className="bg-dark-light rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Send us a Message</h3>
            <ContactForm />
          </div>
          
          <div className="bg-dark-light rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;