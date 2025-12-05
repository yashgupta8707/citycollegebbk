import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import EnquiryForm from './EnquiryForm';

const HeroCarousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full min-h-[500px] md:min-h-[550px] lg:h-[650px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center py-12 md:py-16 lg:py-0">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-[1fr_400px] gap-6 lg:gap-8 items-start lg:items-center">
                {/* Left Content */}
                <div className="text-white">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 lg:mb-4 animate-fade-up leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl lg:text-2xl mb-4 lg:mb-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                    {slide.subtitle}
                  </p>
                  <p className="text-sm md:text-base lg:text-lg mb-6 lg:mb-8 text-gray-100 animate-fade-up max-w-2xl" style={{ animationDelay: '0.4s' }}>
                    {slide.description}
                  </p>
                  <div className="flex flex-wrap gap-3 lg:gap-4 animate-fade-up" style={{ animationDelay: '0.6s' }}>
                    {slide.buttons}
                  </div>
                </div>

                {/* Right Side - Enquiry Form (visible on lg screens and up) */}
                <div className="hidden lg:block animate-fade-up" style={{ animationDelay: '0.8s' }}>
                  <EnquiryForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 z-10"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
