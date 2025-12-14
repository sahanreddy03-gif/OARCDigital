export default function PhoneMockup() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative transform rotate-3 transition-transform hover:rotate-0 duration-500">
        {/* Phone frame - Social Shepherd illustrated style with TWO white borders */}
        {/* Outer black outline */}
        <div 
          className="relative rounded-[3rem] shadow-2xl"
          style={{ 
            padding: '3px',
            backgroundColor: '#0a0a0a',
            boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.5)',
          }}
        >
          {/* First white border */}
          <div 
            className="relative rounded-[2.7rem] bg-white"
            style={{ padding: '10px' }}
          >
            {/* Inner black outline */}
            <div 
              className="relative rounded-[2.2rem]"
              style={{ padding: '3px', backgroundColor: '#0a0a0a' }}
            >
              {/* Second white border */}
              <div 
                className="relative rounded-[2rem] bg-white"
                style={{ padding: '8px' }}
              >
                {/* Screen area */}
                <div 
                  className="relative bg-black rounded-[1.5rem] overflow-hidden"
                  style={{ aspectRatio: '10/16' }}
                >
                  {/* Notch with matching style */}
                  <div 
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-white rounded-b-2xl z-10"
                    style={{ 
                      boxShadow: 'inset 0 -2px 0 #0a0a0a, 2px 0 0 #0a0a0a, -2px 0 0 #0a0a0a'
                    }}
                  >
                    {/* Speaker/earpiece */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-zinc-400 rounded-full"></div>
                    {/* Camera dot */}
                    <div className="absolute top-2 right-5 w-2.5 h-2.5 bg-zinc-600 rounded-full"></div>
                  </div>
                  
                  {/* Side buttons - left side */}
                  <div 
                    className="absolute top-20 -left-[20px] w-[8px] h-6 bg-white rounded-l-md"
                    style={{ boxShadow: '-2px 0 0 #0a0a0a, 0 -2px 0 #0a0a0a, 0 2px 0 #0a0a0a' }}
                  />
                  <div 
                    className="absolute top-32 -left-[20px] w-[8px] h-10 bg-white rounded-l-md"
                    style={{ boxShadow: '-2px 0 0 #0a0a0a, 0 -2px 0 #0a0a0a, 0 2px 0 #0a0a0a' }}
                  />
                  <div 
                    className="absolute top-48 -left-[20px] w-[8px] h-10 bg-white rounded-l-md"
                    style={{ boxShadow: '-2px 0 0 #0a0a0a, 0 -2px 0 #0a0a0a, 0 2px 0 #0a0a0a' }}
                  />
                  
                  {/* Side button - right side (power) */}
                  <div 
                    className="absolute top-36 -right-[20px] w-[8px] h-14 bg-white rounded-r-md"
                    style={{ boxShadow: '2px 0 0 #0a0a0a, 0 -2px 0 #0a0a0a, 0 2px 0 #0a0a0a' }}
                  />
                  
                  {/* Video content */}
                  <div className="relative w-full h-full">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src="/phone-video.mp4" type="video/mp4" />
                    </video>
                    
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
