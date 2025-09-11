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
            Programs
          </h1>
          <p className="text-gray-600 mb-4">
            MiCasita offers many methods of enrollment for your children.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Toddler Community */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex flex-col">
                <div className="w-full aspect-square">
                  <img 
                    src="/api/placeholder/500/500" 
                    alt="Toddler Community" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col">
                  <h2 className="text-2xl font-semibold text-blue-800 mb-4">Toddler Community</h2>
                  <p className="text-gray-600 mb-4">
                    18 months to 3 years old
                    <br /><br />
                    Full Day Montessori immersion progam for your toddler.        
                  </p>
                  <div className="mt-auto">
                    <a href="/toddler-community" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Children's House */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex flex-col">
                <div className="w-full aspect-square">
                  <img 
                    src="/api/placeholder/500/500" 
                    alt="Children's House" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col">
                  <h2 className="text-2xl font-semibold text-green-800 mb-4">Children's House</h2>
                  <p className="text-gray-600 mb-4">
                    3 to 6 years old
                    <br /><br />
                    Children can enter this program as early as 2 years 9 months, if they are fully toilet trained and developmentally ready.
                  </p>
                  <div className="mt-auto">
                    <a href="/childrens-house" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Family Services */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex flex-col">
                <div className="w-full aspect-square">
                  <img 
                    src="/api/placeholder/500/500" 
                    alt="Family Services" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col">
                  <h2 className="text-2xl font-semibold text-purple-800 mb-4">Family Services</h2>
                  <p className="text-gray-600 mb-4">
                    All age groups
                    <br /><br />
                    Ranging from buenas dias to summer exploration, look at what more Mi Casita can offer.
                  </p>
                  <div className="mt-auto">
                    <a href="/family-services" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProgramsPage;