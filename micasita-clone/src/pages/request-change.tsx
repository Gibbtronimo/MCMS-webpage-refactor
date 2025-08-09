import React, { useState } from 'react';
import Head from 'next/head';

const RequestChangePage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    requestType: '',
    pageAffected: '',
    currentContent: '',
    proposedChange: '',
    reason: '',
    urgency: 'normal'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Change request submitted:', formData);
  };

  return (
    <>
      <Head>
        <title>Request Content Change - Micasita</title>
        <meta name="description" content="Submit a request to update or change website content" />
      </Head>
      
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Request Content Change
          </h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <p className="text-lg text-gray-600 mb-4">
              Help us keep our website current and accurate by submitting content change requests. 
              Whether you've found outdated information, broken links, or have suggestions for improvements, 
              we appreciate your feedback.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="text-blue-800">
                <strong>Note:</strong> All change requests will be reviewed by our team before implementation. 
                We aim to respond within 2-3 business days.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="requestType" className="block text-sm font-medium text-gray-700 mb-1">
                    Type of Change *
                  </label>
                  <select
                    id="requestType"
                    name="requestType"
                    required
                    value={formData.requestType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select change type</option>
                    <option value="content-update">Content Update</option>
                    <option value="broken-link">Broken Link</option>
                    <option value="outdated-info">Outdated Information</option>
                    <option value="new-content">New Content Request</option>
                    <option value="typo-error">Typo/Error Correction</option>
                    <option value="accessibility">Accessibility Issue</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="pageAffected" className="block text-sm font-medium text-gray-700 mb-1">
                  Page/Section Affected *
                </label>
                <input
                  type="text"
                  id="pageAffected"
                  name="pageAffected"
                  required
                  value={formData.pageAffected}
                  onChange={handleChange}
                  placeholder="e.g., About Us page, Programs section, Contact information"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="currentContent" className="block text-sm font-medium text-gray-700 mb-1">
                  Current Content (if applicable)
                </label>
                <textarea
                  id="currentContent"
                  name="currentContent"
                  rows={3}
                  value={formData.currentContent}
                  onChange={handleChange}
                  placeholder="Copy and paste the current content that needs to be changed..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              
              <div>
                <label htmlFor="proposedChange" className="block text-sm font-medium text-gray-700 mb-1">
                  Proposed Change/New Content *
                </label>
                <textarea
                  id="proposedChange"
                  name="proposedChange"
                  required
                  rows={4}
                  value={formData.proposedChange}
                  onChange={handleChange}
                  placeholder="Describe the changes you would like to see or provide the new content..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              
              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
                  Reason for Change *
                </label>
                <textarea
                  id="reason"
                  name="reason"
                  required
                  rows={3}
                  value={formData.reason}
                  onChange={handleChange}
                  placeholder="Please explain why this change is needed..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              
              <div>
                <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-1">
                  Urgency Level
                </label>
                <select
                  id="urgency"
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="low">Low - Can wait 1-2 weeks</option>
                  <option value="normal">Normal - Within a week</option>
                  <option value="high">High - Within 2-3 days</option>
                  <option value="urgent">Urgent - Immediate attention needed</option>
                </select>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Before submitting:</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Double-check all information for accuracy</li>
                  <li>• Ensure your contact information is correct</li>
                  <li>• Be as specific as possible about the requested changes</li>
                  <li>• Include URLs or page references when applicable</li>
                </ul>
              </div>
              
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 font-medium text-lg"
              >
                Submit Change Request
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default RequestChangePage;
