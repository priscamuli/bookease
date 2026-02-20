import React from "react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/20 z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm text-center animate-fadeIn">
        <h2 className="text-2xl font-bold text-orange-600 mb-4">✅ Request Sent!</h2>
        <p className="text-gray-700 mb-6">We’ve received your consultation request. Our team will contact you shortly.</p>
        <button
          onClick={onClose}
          className="bg-orange-600 text-orange-400 px-6 py-2 rounded-lg hover:bg-orange-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
