interface ImagePopupProps {
  images: string[];
  activeImage: string;
  onClose: () => void;
  onSelect: (img: string) => void;
}

export default function ImagePopup({
  images = [],
  activeImage,
  onClose,
  onSelect,
}: ImagePopupProps) {
  return (
    <div
      className="fixed inset-0 z-100 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 transition-all"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white text-4xl font-light z-110 transition-colors"
      >
        &times;
      </button>

      <div
        className="relative max-w-5xl w-full flex flex-col gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Main Image Container */}
        <div className="relative group bg-white/5 rounded-3xl overflow-hidden flex justify-center items-center shadow-2xl">
          <img
            src={activeImage}
            alt="preview"
            className="max-h-[75vh] w-auto object-contain select-none transition-transform duration-300 group-hover:scale-[1.01]"
          />
        </div>

        {/* Thumbnails Section */}
        <div className="flex justify-center">
          <div className="flex gap-3 overflow-x-auto p-2 no-scrollbar">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => onSelect(img)}
                className={`relative w-20 h-20 rounded-xl overflow-hidden transition-all duration-200 
                  ${img === activeImage 
                    ? "ring-2 ring-blue-500 scale-110 z-10" 
                    : "opacity-50 hover:opacity-100 border border-white/10"
                  }`}
              >
                <img
                  src={img}
                  alt={`thumbnail ${index}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}