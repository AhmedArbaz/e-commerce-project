import React from 'react';

const contactInfo = [
  "123 Store Street",
  "City, State 12345",
  "Phone: (123) 456-7890",
  "Email: info@store.com"
];

const ContactInfo = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Contact</h3>
      <ul className="space-y-2">
        {contactInfo.map((info, index) => (
          <li key={index} className="text-gray-300">
            {info}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactInfo;