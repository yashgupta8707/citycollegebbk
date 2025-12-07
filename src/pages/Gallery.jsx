import { useState } from 'react';
import { X, ZoomIn, ZoomOut, Maximize2, ChevronLeft, ChevronRight, Download } from 'lucide-react';

const Gallery = () => {
  // Generate array of image paths
  const images = Array.from({ length: 19 }, (_, i) => ({
    id: i + 1,
    src: `/facilities/${i + 1}.jpg`,
    title: `Central Facility ${i + 1}`,
  }));

  const [selectedImage, setSelectedImage] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const openImage = (image) => {
    setSelectedImage(image);
    setZoomLevel(1);
  };

  const closeImage = () => {
    setSelectedImage(null);
    setZoomLevel(1);
    setIsFullscreen(false);
  };

  const nextImage = () => {
    if (selectedImage) {
      const currentIndex = images.findIndex(img => img.id === selectedImage.id);
      const nextIndex = (currentIndex + 1) % images.length;
      setSelectedImage(images[nextIndex]);
      setZoomLevel(1);
    }
  };

  const prevImage = () => {
    if (selectedImage) {
      const currentIndex = images.findIndex(img => img.id === selectedImage.id);
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      setSelectedImage(images[prevIndex]);
      setZoomLevel(1);
    }
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.25, 0.5));
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleDownload = () => {
    if (selectedImage) {
      const link = document.createElement('a');
      link.href = selectedImage.src;
      link.download = `central-facility-${selectedImage.id}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (!selectedImage) return;

    if (e.key === 'Escape') closeImage();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === '+' || e.key === '=') handleZoomIn();
    if (e.key === '-') handleZoomOut();
  };

  return (
    <div className="min-h-screen bg-gray-50" onKeyDown={handleKeyDown} tabIndex={0}>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Central Facilities Gallery
          </h1>
          <p className="text-xl text-primary-100">
            Explore Our State-of-the-Art Infrastructure
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-white"
                onClick={() => openImage(image)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    {/* <h3 className="text-white font-semibold text-lg">{image.title}</h3> */}
                    <div className="flex items-center justify-center mt-2">
                      <ZoomIn className="text-white" size={24} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div
          className={`fixed inset-0 z-50 bg-black ${isFullscreen ? 'bg-opacity-100' : 'bg-opacity-90'} flex items-center justify-center transition-all duration-300`}
          onClick={closeImage}
        >
          <div
            className={`relative ${isFullscreen ? 'w-full h-full' : 'w-11/12 h-5/6 max-w-6xl'}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeImage}
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-sm transition"
              title="Close (Esc)"
            >
              <X size={24} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition"
              title="Previous (←)"
            >
              <ChevronLeft size={28} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition"
              title="Next (→)"
            >
              <ChevronRight size={28} />
            </button>

            {/* Control Panel */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 flex items-center space-x-4">
              <button
                onClick={handleZoomOut}
                className="text-white hover:text-primary-300 transition p-2"
                title="Zoom Out (-)"
                disabled={zoomLevel <= 0.5}
              >
                <ZoomOut size={20} />
              </button>

              <span className="text-white font-semibold min-w-[60px] text-center">
                {Math.round(zoomLevel * 100)}%
              </span>

              <button
                onClick={handleZoomIn}
                className="text-white hover:text-primary-300 transition p-2"
                title="Zoom In (+)"
                disabled={zoomLevel >= 3}
              >
                <ZoomIn size={20} />
              </button>

              <div className="w-px h-6 bg-white/30"></div>

              <button
                onClick={toggleFullscreen}
                className="text-white hover:text-primary-300 transition p-2"
                title="Toggle Fullscreen"
              >
                <Maximize2 size={20} />
              </button>

              <button
                onClick={handleDownload}
                className="text-white hover:text-primary-300 transition p-2"
                title="Download Image"
              >
                <Download size={20} />
              </button>
            </div>

            {/* Image Container */}
            <div className="w-full h-full flex items-center justify-center overflow-auto p-4">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain transition-transform duration-300"
                style={{ transform: `scale(${zoomLevel})` }}
              />
            </div>

            {/* Image Info */}
            <div className="absolute top-4 left-4 z-10 bg-white/10 backdrop-blur-md rounded-lg px-4 py-2">
              <p className="text-white font-semibold">{selectedImage.title}</p>
              <p className="text-white/80 text-sm">
                {images.findIndex(img => img.id === selectedImage.id) + 1} / {images.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Instructions */}
      {/* <div className="container mx-auto px-4 pb-12">
        <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Gallery Controls</h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div>
              <h3 className="font-semibold mb-2">Mouse Controls:</h3>
              <ul className="space-y-1 text-sm">
                <li>• Click on any image to preview</li>
                <li>• Click outside the image to close</li>
                <li>• Use navigation arrows to browse</li>
                <li>• Use zoom buttons to zoom in/out</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Keyboard Shortcuts:</h3>
              <ul className="space-y-1 text-sm">
                <li>• <kbd className="bg-gray-200 px-2 py-1 rounded">Esc</kbd> - Close preview</li>
                <li>• <kbd className="bg-gray-200 px-2 py-1 rounded">←</kbd> / <kbd className="bg-gray-200 px-2 py-1 rounded">→</kbd> - Navigate images</li>
                <li>• <kbd className="bg-gray-200 px-2 py-1 rounded">+</kbd> / <kbd className="bg-gray-200 px-2 py-1 rounded">-</kbd> - Zoom in/out</li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Gallery;
