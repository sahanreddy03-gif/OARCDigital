export default function PhoneMockup() {
  return (
    <div className="relative w-full max-w-xs mx-auto">
      <div className="relative transform rotate-3 transition-transform hover:rotate-0 duration-500">
        <div className="relative bg-foreground border-[10px] border-foreground rounded-[2.75rem] shadow-2xl overflow-hidden aspect-[9/19.5]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground rounded-b-2xl z-10"></div>
          
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
            
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
