import React from 'react';
import Head from 'next/head';

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home - Micasita</title>
        <meta name="description" content="Welcome to Micasita - Your trusted community resource" />
      </Head>
      
      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Welcome to Micasita
          </h1>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-lg text-gray-600 mb-4">
              Your trusted community resource center providing essential services and support.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Our Programs</h3>
                <p className="text-blue-600">Discover our comprehensive community programs</p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-2">Our Staff</h3>
                <p className="text-green-600">Meet our dedicated team of professionals</p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-800 mb-2">Contact Us</h3>
                <p className="text-purple-600">Get in touch with our team</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
