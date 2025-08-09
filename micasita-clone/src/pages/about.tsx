import React from 'react';
import Head from 'next/head';

const AboutPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Us - Micasita</title>
        <meta name="description" content="Learn more about Micasita's mission and history" />
      </Head>
      
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            About Micasita
          </h1>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                Micasita is dedicated to providing essential community services and support 
                to help individuals and families thrive in our community.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our History</h2>
              <p className="text-gray-600 mb-6">
                Founded with the vision of creating a supportive community environment, 
                Micasita has been serving our community for years with dedication and compassion.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Values</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Community-centered approach</li>
                <li>Compassionate service</li>
                <li>Cultural sensitivity and inclusivity</li>
                <li>Professional excellence</li>
                <li>Collaborative partnerships</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutPage;
