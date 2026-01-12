import Container from '@/components/Container.jsx';
import Robot from '@/lottie/Robot.json';
import Lottie from 'lottie-react';
import { useState, useEffect } from 'react';

import services from "@/data/services.js";
function Started() {
  const robotMessages = [
    "Hey, Welcome to ScioByte! Let's embark on a data-driven journey together.",
    "First, tell me about yourself and your business.",
    "Great! Now, what services are you interested in?",
    "Almost there! How can we reach you?",
    "Perfect! Let's make your vision a reality."
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [showMessage, setShowMessage] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false); // Added for submission status
  const [formData, setFormData] = useState({
    name: '',
    businessDescription: '',
    selectedServices: [],
    email: '',
    phone: ''
  });

  useEffect(() => {
    const fullText = robotMessages[currentStep];
    setDisplayedText(''); 
    
    let currentIndex = 0; 
    const typingSpeed = 50;
    
    const typeInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typeInterval);
  }, [currentStep]);

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleServiceToggle = (service) => {
    setFormData(prev => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(service)
        ? prev.selectedServices.filter(s => s !== service)
        : [...prev.selectedServices, service]
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    setIsSubmitted(true); // Toggle the success container
  };

  const canProceed = () => {
    switch(currentStep) {
      case 0:
        return true;
      case 1:
        return formData.name && formData.businessDescription;
      case 2:
        return formData.selectedServices.length > 0;
      case 3:
        return formData.email && formData.phone;
      default:
        return true;
    }
  };

  return (
    <div className="bg-white flex items-center justify-center min-h-screen py-8">
      <Container>
        <div className="flex flex-col md:flex-row justify-between w-full items-start space-y-8 md:space-y-0 mt-10 gap-8">
          
          {/* Robot Section */}
          <div className="flex flex-col justify-center items-center gap-5 relative md:w-1/3 w-full">
             {showMessage && (
              <div className="absolute w-full bottom-0 z-50 rounded-xl px-4 py-4 shadow-lg text-center
                bg-gradient-to-tr from-white to-[#e4eaef] text-black">
                <p className="text-sm md:text-base font-medium">
                  {isSubmitted ? "Thank you! Talk to you soon." : displayedText}
                  <span className="animate-pulse">|</span> 
                </p>
                <div className="absolute left-1/2 transform -top-1 w-3 h-3 bg-gradient-to-tr from-white to-[#e4eaef] -rotate-45"></div>
              </div>
            )}

            <Lottie
              animationData={Robot}
              loop={true}
              speed={0.5} 
            />
          </div>

          {/* Form / Success Section */}
          <div className="md:w-2/3 w-full">
            {isSubmitted ? (
              /* Success Container */
              <div className="space-y-6 bg-gray-50 p-8 md:p-12 rounded-xl shadow-sm text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Your form is submitted!</h2>
                <p className="text-gray-600 text-lg max-w-md">
                  Thank you for reaching out. Our team will review your details and contact you soon to bring your vision to life.
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="mt-4 text-sm font-medium text-gray-500 hover:text-black underline transition-colors"
                >
                  Start over
                </button>
              </div>
            ) : (
              <>
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    {[0, 1, 2, 3, 4].map((step) => (
                      <div key={step} className="flex items-center flex-1">
                        <div className="flex flex-col items-center">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm
                            ${currentStep >= step ? 'bg-black text-white' : 'bg-gray-300 text-gray-600'}`}>
                            {step + 1}
                          </div>
                        </div>
                        {step < 4 && (
                          <div className={`h-1 flex-1 mx-2 ${currentStep > step ? 'bg-black' : 'bg-gray-300'}`}></div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="text-center mt-4 text-sm text-gray-600 font-medium">
                    Step {currentStep + 1} of 5
                  </div>
                </div>

                {/* Form Content */}
                <div className="space-y-6 bg-gray-50 p-6 md:p-8 rounded-xl shadow-sm">
                  {currentStep === 0 && (
                    <div className="text-center flex flex-col gap-4">
                      <p className="text-lg font-bold text-gray-800">Welcome to ScioByte!</p>
                      <p className="text-gray-600 text-md">Let's get started on transforming your business with data-driven solutions.</p>
                      <button
                        type="button"
                        onClick={handleNext}
                        className="md:text-base text-sm px-4 py-2 border-2 border-black hover:bg-black rounded-lg text-black hover:text-white transition-colors m-auto w-fit">
                        Get Started
                      </button>
                    </div>
                  )}

                  {currentStep === 1 && (
                    <div className="flex flex-col gap-4">
                      <h3 className="text-lg font-bold text-gray-800">Tell us about yourself</h3>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Tell us about your business *</label>
                        <textarea
                          value={formData.businessDescription}
                          onChange={(e) => setFormData({...formData, businessDescription: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none resize-none"
                          rows="5"
                          placeholder="What does your business do? What are your goals?"
                        />
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-gray-800 mb-4">Select Services</h3>
                      <p className="text-sm text-gray-600 mb-4">Choose one or more services you're interested in</p>
                      <div className="space-y-3">
                        {services.map((service) => (
                          <label key={service?.title} className={`flex items-center space-x-3 p-4 border-2 rounded-lg cursor-pointer transition-all
                            ${formData.selectedServices.includes(service?.title) 
                              ? 'border-black bg-white' 
                              : 'border-gray-300 hover:border-gray-400 bg-white'}`}>
                            <input
                              type="checkbox"
                              checked={formData.selectedServices.includes(service?.title)}
                              onChange={() => handleServiceToggle(service?.title)}
                              className="w-5 h-5 text-black rounded focus:ring-black"
                            />
                            <span className="text-gray-700 font-medium">{service?.title}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-gray-800">Contact Information</h3>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>
                  )}

                  {currentStep === 4 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-gray-800 text-center">Review Your Information</h2>
                      <div className="bg-white p-6 rounded-lg space-y-4 border border-gray-200">
                        <div className="border-b pb-3">
                          <p className="text-sm text-gray-500">Name</p>
                          <p className="font-semibold text-gray-800">{formData.name}</p>
                        </div>
                        <div className="border-b pb-3">
                          <p className="text-sm text-gray-500">Business Description</p>
                          <p className="font-semibold text-gray-800">{formData.businessDescription}</p>
                        </div>
                        <div className="border-b pb-3">
                          <p className="text-sm text-gray-500">Selected Services</p>
                          <ul className="list-disc list-inside mt-2 space-y-1">
                            {formData.selectedServices.map((service, idx) => (
                              <li key={idx} className="font-semibold text-gray-800">{service}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="border-b pb-3">
                          <p className="text-sm text-gray-500">Email</p>
                          <p className="font-semibold text-gray-800">{formData.email}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Phone</p>
                          <p className="font-semibold text-gray-800">{formData.phone}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  {currentStep > 0 && (
                    <div className="flex justify-between w-full">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="text-xs px-4 py-2 border-2 border-black hover:bg-black rounded-lg text-black hover:text-white transition-colors w-fit">
                        Back
                      </button>
                      {currentStep < 4 ? (
                        <button
                          type="button"
                          onClick={handleNext}
                          disabled={!canProceed()}
                          className={`text-xs px-4 py-2 border-2 rounded-lg transition-colors w-fit
                            ${canProceed() 
                              ? ' bg-white text-black hover:text-white border-black hover:bg-black' 
                              : ' border-gray-300 bg-gray-300 text-gray-500 cursor-not-allowed'}`}>
                          Next
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={handleSubmit}
                          className="md:text-base text-sm px-4 py-2 border-2 border-black bg-black hover:bg-transparent rounded-lg hover:text-black text-white transition-colors m-auto w-fit">
                          Submit
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Started;