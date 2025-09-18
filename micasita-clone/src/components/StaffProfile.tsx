import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface StaffProfileProps {
  profileImage: string;
  name: string;
  description: string;
  readMoreText: string;
  readMoreLink: string;
  altText?: string;
}

const StaffProfile: React.FC<StaffProfileProps> = ({
  profileImage,
  name,
  description,
  readMoreText,
  readMoreLink,
  altText
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
      <div className="w-32 h-32 mx-auto mb-4 relative">
        <Image
          src={profileImage}
          alt={altText || `Profile picture of ${name}`}
          fill
          className="rounded-full object-cover"
          sizes="(max-width: 768px) 128px, 128px"
        />
      </div>
      
      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        {name}
      </h3>
      
      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
        {description}
      </p>
      
      <Link 
        href={readMoreLink}
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
      >
        {readMoreText}
      </Link>
    </div>
  );
};

export default StaffProfile;
