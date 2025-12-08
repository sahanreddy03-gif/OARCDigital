export default function PhoneMockup() {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      <div className="relative transform rotate-3 transition-transform hover:rotate-0 duration-500">
        {/* Outer white frame with black outline - Social Shepherd style */}
        <div className="relative rounded-[2.5rem] p-[6px] bg-white shadow-2xl" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}>
          {/* Black outline ring */}
          <div className="absolute inset-0 rounded-[2.5rem] ring-[3px] ring-black/90 pointer-events-none"></div>
          
          {/* Inner white border layer */}
          <div className="relative rounded-[2.2rem] p-[5px] bg-white">
            {/* Inner black outline */}
            <div className="absolute inset-0 rounded-[2.2rem] ring-[2px] ring-black/80 pointer-events-none"></div>
            
            {/* Screen area with wider aspect ratio */}
            <div className="relative bg-black rounded-[1.8rem] overflow-hidden aspect-[9/16]">
              {/* Notch - white with black outline */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-white rounded-b-2xl z-10 border-x-[2px] border-b-[2px] border-black/80">
                {/* Camera dot */}
                <div className="absolute top-1.5 right-6 w-2.5 h-2.5 bg-black/60 rounded-full"></div>
                {/* Speaker */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1.5 bg-black/50 rounded-full"></div>
              </div>
              
              {/* Side buttons - left side (white with black outline) */}
              <div className="absolute top-16 -left-[11px] w-[5px] h-6 bg-white rounded-l-sm border-l-2 border-y-2 border-black/80"></div>
              <div className="absolute top-28 -left-[11px] w-[5px] h-10 bg-white rounded-l-sm border-l-2 border-y-2 border-black/80"></div>
              <div className="absolute top-[10.5rem] -left-[11px] w-[5px] h-10 bg-white rounded-l-sm border-l-2 border-y-2 border-black/80"></div>
              
              {/* Side button - right side (white with black outline) */}
              <div className="absolute top-24 -right-[11px] w-[5px] h-14 bg-white rounded-r-sm border-r-2 border-y-2 border-black/80"></div>
              
              {/* Video content */}
              <div className="relative w-full h-full">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="https://assets.mixkit.co/videos/preview/mixkit-people-in-a-meeting-room-4101-large.mp4" type="video/mp4" />
                </video>
                
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
