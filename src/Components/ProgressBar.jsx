import React from 'react';

export default function ProgressBar({ progress }) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-8 relative"> {/* Increased height */}
      <div
        className="bg-black h-8 rounded-full flex items-center justify-center text-white text-lg" // Increased text size
        style={{ width: `${progress}%` }}
      >
        {progress}%
      </div>
    </div>
  );
}
