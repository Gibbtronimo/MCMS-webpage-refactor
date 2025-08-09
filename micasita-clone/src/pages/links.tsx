import React from 'react';
import Head from 'next/head';

const LinksPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Useful Links - Micasita</title>
        <meta name="description" content="Find helpful resources and community links" />
      </Head>
      
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Useful Links
          </h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <p className="text-lg text-gray-600">
              Find helpful resources, community partners, and important links to support 
              your needs and connect you with additional services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">Government Resources</h2>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800 underline block">
                    Department of Social Services
                  </a>
                  <p className="text-gray-600 text-sm">Benefits and assistance programs</p>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800 underline block">
                    Department of Health
                  </a>
                  <p className="text-gray-600 text-sm">Health services and information</p>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800 underline block">
                    Housing Authority
                  </a>
                  <p className="text-gray-600 text-sm">Housing assistance and resources</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">Community Partners</h2>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-green-600 hover:text-green-800 underline block">
                    Local Food Bank
                  </a>
                  <p className="text-gray-600 text-sm">Emergency food assistance</p>
                </li>
                <li>
                  <a href="#" className="text-green-600 hover:text-green-800 underline block">
                    Community Health Center
                  </a>
                  <p className="text-gray-600 text-sm">Affordable healthcare services</p>
                </li>
                <li>
                  <a href="#" className="text-green-600 hover:text-green-800 underline block">
                    Legal Aid Society
                  </a>
                  <p className="text-gray-600 text-sm">Free legal assistance</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-purple-800 mb-4">Educational Resources</h2>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-purple-600 hover:text-purple-800 underline block">
                    Local School District
                  </a>
                  <p className="text-gray-600 text-sm">School enrollment and programs</p>
                </li>
                <li>
                  <a href="#" className="text-purple-600 hover:text-purple-800 underline block">
                    Community College
                  </a>
                  <p className="text-gray-600 text-sm">Adult education and training</p>
                </li>
                <li>
                  <a href="#" className="text-purple-600 hover:text-purple-800 underline block">
                    Public Library
                  </a>
                  <p className="text-gray-600 text-sm">Educational programs and resources</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-red-800 mb-4">Emergency Services</h2>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-red-600 hover:text-red-800 underline block">
                    Emergency Assistance Hotline
                  </a>
                  <p className="text-gray-600 text-sm">24/7 crisis support</p>
                </li>
                <li>
                  <a href="#" className="text-red-600 hover:text-red-800 underline block">
                    Domestic Violence Resources
                  </a>
                  <p className="text-gray-600 text-sm">Support and shelter services</p>
                </li>
                <li>
                  <a href="#" className="text-red-600 hover:text-red-800 underline block">
                    Mental Health Crisis Line
                  </a>
                  <p className="text-gray-600 text-sm">Mental health emergency support</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LinksPage;
