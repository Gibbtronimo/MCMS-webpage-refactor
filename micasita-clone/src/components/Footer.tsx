import React from 'react';

interface FooterCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  iconColor: string;
}
// Footer Card Component
const FooterCard: React.FC<FooterCardProps> = ({ icon, title, content, iconColor }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4">
        <div className={`w-12 h-12 ${iconColor}`}>
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <p className="text-sm text-gray-600 whitespace-pre-line">
          {content}
        </p>
      </div>
    </div>
  );
};

// Footer Component
const Footer: React.FC = () => {
  const footerCards = [
    {
      icon: (
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      title: "Opening Hours",
      content: "Monday - Friday\n7:30 AM - 5:30 PM",
      iconColor: "text-blue-400"
    },
    {
      icon: (
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Our Address",
      content: "754 Caddo St.\nCorpus Christi, TX 78412",
      iconColor: "text-green-400"
    },
    {
      icon: (
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
      title: "Contact Us",
      content: "+1 (361) 991-1492\nmicasitamontessorischool@gmail.com",
      iconColor: "text-purple-400"
    }
  ];

  return (
    <footer className="bg-white text-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {footerCards.map((card, index) => (
            <FooterCard
              key={index}
              icon={card.icon}
              title={card.title}
              content={card.content}
              iconColor={card.iconColor}
            />
          ))}
        </div>

        {/* Bottom section with copyright */}
        <div className="mt-8 pt-8 border-t border-gray-300 text-center">
          <p className="text-sm text-gray-600">
            © 2025 MCMS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
