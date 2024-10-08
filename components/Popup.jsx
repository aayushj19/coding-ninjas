"use client";
import { useEffect } from 'react';
import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';

export default function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black opacity-50 z-40" 
      ></div>

      {/* Modal */}
      <div 
        className="relative bg-[#141819] text-white border-4 border-[#F66C3B] rounded-lg p-6 max-w-lg w-full z-50"
        onClick={(e) => e.stopPropagation()} // Ensure the modal content remains interactive
      >
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute flex justify-center items-center p-2 top-2 right-2 h-fit w-fit rounded-full bg-white bg-opacity-10 text-white font-bold"
        >
          <FaTimes />
        </button>

        {/* Image */}
        <div className="flex justify-center mb-4">
          <Image 
            src="/assets/images/deadpool.png" 
            alt="Baadlo 4.0" 
            width={400} 
            height={300} 
            className="rounded-lg" 
          />
        </div>

        {/* Explore Event Button */}
        <div className="flex justify-center">
          <button 
            className="red-hat-display-heading explore-btn outline-1 cursor-pointer text-[#F17522] rounded-xl px-4 py-2 bg-[#141819] border-4 text-2xl border-[#F17522]"
            onClick={onClose}
          >
            Explore Event
          </button>
        </div>
      </div>
    </div>
  );
}
