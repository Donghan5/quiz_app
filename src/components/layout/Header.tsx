import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-white/80 backdrop-blur-md shadow-sm border-b border-white/20 flex items-center justify-between px-6 z-50">

      {/* Logo Area */}
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl shadow-lg transform hover:rotate-12 transition-transform duration-300">
          <span className="text-2xl">🧠</span>
        </div>
        <h1 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 tracking-tight">
          Quiz App
        </h1>
      </div>

      {/* User Actions */}
      <div className="flex items-center gap-4">
        <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>

        <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-gray-700 leading-none">Player One</p>
            <p className="text-xs text-gray-500">Rookie</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 p-[2px] cursor-pointer shadow-md hover:shadow-lg transition-shadow">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-sm font-bold text-gray-700">
              U
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
