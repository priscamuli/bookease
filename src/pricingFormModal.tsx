import React from "react";

interface PricingFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage: string;
}

const PricingFormModal: React.FC<PricingFormModalProps> = ({ isOpen, onClose, selectedPackage }) => {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Consultation request submitted for:", selectedPackage);
    alert("Your consultation request has been sent!");
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30  z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg relative animate-fadeIn">
        
        {/* X Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold"
        >
          ×
        </button>

        <h2 className="text-3xl font-extrabold text-orange-600 mb-6 text-center">
          Consultation for {selectedPackage}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-let text-sm font-semibold text-gray-700 mb-1">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label className="block text-left text-sm font-semibold text-gray-700 mb-1">Phone</label>
            <input
              type="tel"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              placeholder="Your phone number"
              required
            />
          </div>

          <div>
            <label className="block text-left text-sm font-semibold text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              placeholder="Your email"
              required
            />
          </div>

          <div>
            <label className="block text-left text-sm font-semibold text-gray-700 mb-1">Company Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              placeholder="Your company"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 text-gray-400 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-transform transform hover:scale-105 shadow-md"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default PricingFormModal;
