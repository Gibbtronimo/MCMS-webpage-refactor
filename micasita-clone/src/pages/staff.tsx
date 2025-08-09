import React from 'react';
import Head from 'next/head';

const StaffPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Staff - Micasita</title>
        <meta name="description" content="Meet our dedicated team of professionals" />
      </Head>
      
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Our Team
          </h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <p className="text-lg text-gray-600 mb-6">
              Our dedicated team of professionals is committed to serving our community 
              with compassion, expertise, and cultural sensitivity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Executive Director</h3>
              <p className="text-blue-600 mb-2">Leadership & Administration</p>
              <p className="text-gray-600 text-sm">
                Provides strategic leadership and oversees all organizational operations.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Program Manager</h3>
              <p className="text-green-600 mb-2">Program Development</p>
              <p className="text-gray-600 text-sm">
                Manages and develops community programs to meet evolving needs.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Community Outreach Coordinator</h3>
              <p className="text-purple-600 mb-2">Community Engagement</p>
              <p className="text-gray-600 text-sm">
                Builds relationships and connects community members with resources.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Case Manager</h3>
              <p className="text-red-600 mb-2">Client Services</p>
              <p className="text-gray-600 text-sm">
                Provides direct support and assistance to community members.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Administrative Assistant</h3>
              <p className="text-yellow-600 mb-2">Operations Support</p>
              <p className="text-gray-600 text-sm">
                Supports daily operations and provides administrative assistance.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Volunteer Coordinator</h3>
              <p className="text-indigo-600 mb-2">Volunteer Management</p>
              <p className="text-gray-600 text-sm">
                Recruits, trains, and manages community volunteers.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default StaffPage;
