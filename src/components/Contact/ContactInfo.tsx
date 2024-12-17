import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactDetails = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['123 Store Street', 'City, State 12345'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+1 (123) 456-7890', '+1 (123) 456-7891'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['info@store.com', 'support@store.com'],
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: ['Mon - Fri: 9AM - 6PM', 'Sat - Sun: 10AM - 4PM'],
  },
];

const ContactInfo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {contactDetails.map((item, index) => (
        <div key={index} className="flex items-start space-x-4 bg-dark p-4 rounded-lg">
          <div className="flex-shrink-0">
            <div className="p-2 bg-dark-lighter rounded-lg">
              <item.icon className="h-6 w-6 text-accent" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium text-white">{item.title}</h3>
            {item.details.map((detail, idx) => (
              <p key={idx} className="mt-1 text-gray-300">
                {detail}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;