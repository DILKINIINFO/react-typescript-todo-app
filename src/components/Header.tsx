const Header = () => {
  return (
    <div className="text-center mb-12">
      <h1 
        className="text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-4 animate-pulse drop-shadow-2xl"
        style={{
          lineHeight: '1.2',
          paddingBottom: '8px',
          paddingTop: '4px'
        }}
      >
        ✨ Todo Magic
      </h1>
      <p className="text-white text-lg font-medium drop-shadow-lg">Transform your productivity with style</p>
    </div>
  );
};

export default Header;