import React from 'react';
import Head from 'next/head';

const ProgramsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Programs - Micasita</title>
        <meta name="description" content="Explore our comprehensive community programs and services" />
      </Head>
      
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Our Programs
          </h1>
          
          <div className="grid gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">Community Support Services</h2>
              <p className="text-gray-600 mb-4">
                Comprehensive support services designed to help community members access essential resources.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Resource navigation</li>
                <li>Case management</li>
                <li>Emergency assistance</li>
                <li>Referral services</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">Educational Programs</h2>
              <p className="text-gray-600 mb-4">
                Educational initiatives to empower community members with knowledge and skills.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Financial literacy workshops</li>
                <li>Language classes</li>
                <li>Computer skills training</li>
                <li>Health education</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-purple-800 mb-4">Family Services</h2>
              <p className="text-gray-600 mb-4">
                Specialized services supporting families and children in our community.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Childcare assistance</li>
                <li>Parenting classes</li>
                <li>Youth programs</li>
                <li>Family counseling</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProgramsPage;
