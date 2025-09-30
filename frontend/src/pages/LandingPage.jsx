import React, { useState } from 'react';
import Signup from './Signup'; // Assuming your Signup component is in './Signup.jsx'
import Login from './Login';   // Assuming your Login component is in './Login.jsx'

function LandingPage() {
  const [isLoginView, setIsLoginView] = useState(true);

  return (
    // Primary Color (60%): Light Gray for the main background
    <div className="min-h-screen bg-gray-50 font-sans">
      
      {/* Navigation Bar (A darker primary color for contrast) */}
      <nav className="bg-blue-600 p-4 shadow-lg">
        
      </nav>

      {/* Main Content Area */}
      <main className="container mx-auto p-4 sm:p-8 flex flex-col lg:flex-row items-center justify-between">
        
        {/* Secondary Color (30%): Black for the main marketing/text section */}
        <div className="w-full lg:w-1/2 p-6 lg:p-12 text-center lg:text-left">
          <h2 className="text-5xl font-extrabold text-black mb-4 leading-tight">
            The Future of <br /> <span className="text-black-600">Productivity.</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8">
           Turn customer feedback into powerful business decisions — all in one intelligent dashboard.
          </p>
          
          {/* Accent Color (10%): Red for the main CTA button */}
          <button className="bg-red-600 text-white font-semibold py-3 px-8 rounded-lg shadow-xl hover:bg-red-700 transition duration-300 transform hover:scale-105">
            Start Your Free Trial
          </button>
        </div>

        <div className="w-full lg:w-1/2 mt-10 lg:mt-0 max-w-xl text-center px-6">
  <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
    Transform Feedback into Business Intelligence
  </h2>
  <p className="text-lg text-gray-700 mb-6">
    Our Aspect-Based Sentiment Analysis (ABSA) engine converts unstructured customer reviews into actionable insights across product quality, pricing, delivery speed, and more.
  </p>
  <ul className="text-left text-gray-600 text-md space-y-3 mb-6">
    <li>✅ Visualize key customer pain points</li>
    <li>✅ Track sentiment trends over time</li>
    <li>✅ Drill down into real customer quotes</li>
    <li>✅ Prioritize improvements based on data</li>
  </ul>
  <div className="flex justify-center space-x-4">
    <a href="/login" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-300">
      Get Started
    </a>
    <a href="/signup" className="bg-gray-200 text-gray-900 px-6 py-3 rounded-lg shadow hover:bg-gray-300 transition duration-300">
      Create Account
    </a>
  </div>
</div>

      </main>
    </div>
  );
}

export default LandingPage;