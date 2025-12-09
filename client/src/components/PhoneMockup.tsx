export default function PhoneMockup() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative transform rotate-3 transition-transform hover:rotate-0 duration-500">
        {/* Phone frame - matching Social Shepherd illustrated style */}
        {/* Outer white border with black stroke */}
        <div 
          className="relative rounded-[2.5rem] bg-white shadow-2xl"
          style={{ 
            padding: '8px',
            boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.4)',
            border: '3px solid #1a1a1a'
          }}
        >
          {/* Inner white border with black stroke */}
          <div 
            className="relative rounded-[2rem] bg-white"
            style={{ 
              padding: '6px',
              border: '2.5px solid #1a1a1a'
            }}
          >
            {/* Black screen area - wider aspect ratio */}
            <div 
              className="relative bg-black rounded-[1.5rem] overflow-hidden"
              style={{ aspectRatio: '10/16' }}
            >
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-white rounded-b-xl z-10" style={{ border: '2px solid #1a1a1a', borderTop: 'none' }}>
                {/* Speaker/earpiece */}
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-8 h-1 bg-zinc-600 rounded-full"></div>
                {/* Camera dot */}
                <div className="absolute top-1.5 right-4 w-2 h-2 bg-zinc-700 rounded-full"></div>
              </div>
              
              {/* Side buttons - left side */}
              <div className="absolute top-16 -left-[14px] w-[6px] h-5 bg-white rounded-l-sm" style={{ border: '2px solid #1a1a1a', borderRight: 'none' }}></div>
              <div className="absolute top-24 -left-[14px] w-[6px] h-8 bg-white rounded-l-sm" style={{ border: '2px solid #1a1a1a', borderRight: 'none' }}></div>
              <div className="absolute top-36 -left-[14px] w-[6px] h-8 bg-white rounded-l-sm" style={{ border: '2px solid #1a1a1a', borderRight: 'none' }}></div>
              
              {/* Side button - right side (power) */}
              <div className="absolute top-28 -right-[14px] w-[6px] h-12 bg-white rounded-r-sm" style={{ border: '2px solid #1a1a1a', borderLeft: 'none' }}></div>
              
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
