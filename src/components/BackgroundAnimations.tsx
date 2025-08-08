const BackgroundAnimations = () => {
  // Floating particles animation
  const particles = Array.from({ length: 20 }, (_, i) => (
    <div
      key={i}
      className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30"
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 20}s`,
        animationDuration: `${15 + Math.random() * 10}s`
      }}
    />
  ));

  return (
    <div className="absolute inset-0">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl animate-ping" 
           style={{ animationDuration: '4s' }} />
      
      {/* Floating particles */}
      <div className="particles">
        {particles.map((particle, index) => 
          <div key={index} className="animate-float" style={{ 
            animationDelay: `${index * 0.5}s`,
            animationDuration: `${10 + (index % 5) * 2}s`
          }}>
            {particle}
          </div>
        )}
      </div>
    </div>
  );
};

export default BackgroundAnimations;