export default function PhoneMockup() {
  return (
    <div className="relative w-full max-w-xs mx-auto">
      <div className="relative transform rotate-3 transition-transform hover:rotate-0 duration-500">
        {/* Phone frame - white borders with subtle dark outline like reference image */}
        <div className="relative bg-white border-[10px] border-white rounded-[2.75rem] shadow-2xl overflow-hidden aspect-[9/19.5] ring-2 ring-black/80">
          {/* Notch - white with dark outline */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-white rounded-b-2xl z-10 border-x-2 border-b-2 border-black/80"></div>
          
          {/* Side buttons - left side */}
          <div className="absolute top-20 -left-[3px] w-[3px] h-8 bg-black/80 rounded-l-sm"></div>
          <div className="absolute top-32 -left-[3px] w-[3px] h-12 bg-black/80 rounded-l-sm"></div>
          <div className="absolute top-48 -left-[3px] w-[3px] h-12 bg-black/80 rounded-l-sm"></div>
          
          {/* Side button - right side */}
          <div className="absolute top-28 -right-[3px] w-[3px] h-16 bg-black/80 rounded-r-sm"></div>
          
          <div className="relative w-full h-full bg-gradient-to-br from-primary/30 via-chart-2/30 to-chart-4/30">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-people-in-a-meeting-room-4101-large.mp4" type="video/mp4" />
            </video>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
