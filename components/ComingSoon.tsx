export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8 inline-block">
          <div className="w-20 h-20 bg-purple-600 rounded-full animate-pulse"></div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 animate-pulse">
          Coming Soon
        </h1>
        
        <p className="text-xl text-gray-300 mb-8">
          We are launching something special
        </p>
        
        <div className="flex justify-center gap-2">
          <div className="w-3 h-3 bg-purple-600 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-purple-600 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
          <div className="w-3 h-3 bg-purple-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
        </div>
      </div>
    </div>
  );
}