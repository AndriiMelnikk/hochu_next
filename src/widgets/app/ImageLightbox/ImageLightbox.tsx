import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';
import { Button, Modal, ModalContent } from '@/ui-v2';

interface ImageLightboxProps {
  images: string[];
  initialIndex?: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ImageLightbox = ({ images, initialIndex = 0, open, onOpenChange }: ImageLightboxProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setCurrentIndex(initialIndex);
      }, 100);
    }
  }, [open, initialIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
    if (e.key === 'Escape') onOpenChange(false);
  };

  if (!images || images.length === 0) return null;

  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <ModalContent
        className="max-w-7xl w-full h-[90vh] p-0 bg-black/95 border-0"
        onKeyDown={handleKeyDown}
      >
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          {/* Previous Button */}
          {images.length > 1 && (
            <Button
              variant="ghost"
              shape="circle"
              className="absolute left-4 z-40 bg-v2-surface"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
          )}

          {/* Image */}
          <div className="relative w-full h-full max-w-full max-h-full">
            <Image
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>

          {/* Next Button */}
          {images.length > 1 && (
            <Button
              variant="ghost"
              shape="circle"
              className="absolute right-4 z-40 bg-v2-surface"
              onClick={goToNext}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          )}

          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </div>
      </ModalContent>
    </Modal>
  );
};

export default ImageLightbox;
