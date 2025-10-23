export default function PhoneMockup() {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      <div className="relative transform rotate-2 transition-transform hover:rotate-0 duration-500">
        <div className="relative bg-background border-8 border-foreground/10 rounded-[2.5rem] shadow-2xl overflow-hidden aspect-[9/19]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-foreground/10 rounded-b-3xl z-10"></div>
          
          <div className="relative w-full h-full bg-gradient-to-br from-primary/20 via-chart-2/20 to-chart-4/20">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-people-in-a-meeting-room-4101-large.mp4" type="video/mp4" />
            </video>
            
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
