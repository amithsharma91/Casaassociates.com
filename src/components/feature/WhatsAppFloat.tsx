export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919000975046?text=Hi%2C%20I%20would%20like%20to%20discuss%20my%20project%20with%20Casa%20Associates."
      target="_blank"
      rel="nofollow noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 group"
    >
      <div className="relative flex items-center">
        {/* Tooltip label */}
        <span className="absolute right-12 md:right-14 bg-neutral-900 text-white text-xs font-medium tracking-wide px-3 py-2 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 pointer-events-none">
          Chat on WhatsApp
        </span>
        {/* Button */}
        <div className="w-[44px] h-[44px] md:w-[52px] md:h-[52px] flex items-center justify-center bg-green-500 rounded-full cursor-pointer transition-all duration-300 group-hover:scale-110 group-hover:bg-green-400">
          <i className="ri-whatsapp-line text-white text-lg md:text-xl"></i>
        </div>
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-green-500/30 animate-ping opacity-60 group-hover:opacity-0 transition-opacity"></span>
      </div>
    </a>
  );
}
