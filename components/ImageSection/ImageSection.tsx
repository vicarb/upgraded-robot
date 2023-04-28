import React from 'react';

interface ImageSectionProps {
  images: string[];
}

const ImageSection: React.FC<ImageSectionProps> = ({ images }) => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="h-64 md:h-full relative">
            <img src={image} alt="" className="h-full w-full object-cover rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSection;
