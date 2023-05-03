import React from 'react';

interface ImageSectionProps {
  images: string[];
}

const ImageSection: React.FC<ImageSectionProps> = ({ images }) => {
  return (
    <div className="bg-gradient-to-br from-pink-500 via-red-500 to-orange-500 z-10">
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl lg:text-8xl font-bold mb-8 text-center">AIRON Athletics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="h-64 md:h-full relative rounded-md overflow-hidden shadow-lg">
              <img src={image} alt="" className="h-full w-full object-cover rounded-md transform transition-all hover:scale-110" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSection;