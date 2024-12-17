import { Send } from 'lucide-react';

const ContactForm = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full rounded-md bg-dark border border-dark-lighter px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full rounded-md bg-dark border border-dark-lighter px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            placeholder="john@example.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          className="mt-1 block w-full rounded-md bg-dark border border-dark-lighter px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
          placeholder="How can we help?"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          className="mt-1 block w-full rounded-md bg-dark border border-dark-lighter px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent resize-none"
          placeholder="Your message here..."
        />
      </div>
      <div>
        <button
          type="submit"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-accent-dark transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
        >
          <Send className="h-5 w-5 mr-2" />
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;