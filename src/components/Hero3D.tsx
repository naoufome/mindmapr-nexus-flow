
export const Hero3D = () => {
  return (
    <div className="h-64 w-full relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20">
      {/* Central node */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse shadow-lg shadow-cyan-400/50 flex items-center justify-center">
            <span className="text-white font-semibold text-sm">Ideas</span>
          </div>
          
          {/* Connection lines */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-32 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-400 absolute -rotate-45 origin-center animate-pulse"></div>
            <div className="w-32 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 absolute rotate-45 origin-center animate-pulse"></div>
            <div className="w-32 h-0.5 bg-gradient-to-r from-cyan-400 to-green-400 absolute rotate-90 origin-center animate-pulse"></div>
            <div className="w-32 h-0.5 bg-gradient-to-r from-cyan-400 to-yellow-400 absolute origin-center animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Connected nodes */}
      <div className="absolute top-8 left-8 w-12 h-12 bg-gradient-to-r from-pink-400 to-red-500 rounded-full animate-bounce flex items-center justify-center shadow-lg">
        <span className="text-white text-xs font-medium">Create</span>
      </div>
      
      <div className="absolute bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full animate-bounce flex items-center justify-center shadow-lg" style={{ animationDelay: '0.5s' }}>
        <span className="text-white text-xs font-medium">Organize</span>
      </div>
      
      <div className="absolute top-8 right-8 w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-bounce flex items-center justify-center shadow-lg" style={{ animationDelay: '1s' }}>
        <span className="text-white text-xs font-medium">Connect</span>
      </div>
      
      <div className="absolute bottom-8 left-8 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce flex items-center justify-center shadow-lg" style={{ animationDelay: '1.5s' }}>
        <span className="text-white text-xs font-medium">Grow</span>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/50 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};
