import React from 'react';
import Head from 'next/head';

const ECashierPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>eCashier - Micasita</title>
        <meta name="description" content="eCashier - Digital payment and financial services" />
      </Head>
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Component */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              eCashier
            </h1>
            
            <p className="text-lg text-gray-600 mb-6">
              Through FACTS eCashier, you are able to conduct the following:
            </p>
            
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Features:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Pay with credit/debit card</li>
                <li>Arrange monthly installments</li>
                <li>Arrange semiannual installments</li>
                <li>Arrange one annual payment</li>
              </ul>
            </div>
          </div>
          
          {/* Right Component */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-center">
            <p className="text-xl text-gray-700 mb-8 text-center">
               Use the button below to create a FACTS eCashier account or to manage your existing account.
            </p>
            
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              Access eCashier
            </button>
          </div>
                 </div>
       </div>
     </>
   );
 };

 export default ECashierPage;
