import React from "react";

const SearchBar = ({ input, setInput, onSearch }) => {
  return (
    <div className="w-full bg-[#262B44] p-4 rounded-xl flex items-center justify-between">
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="flex-grow mr-4 bg-transparent text-white border-b border-gray-500 focus:outline-none placeholder-gray-400" placeholder="Search for a city..."/>
      <button onClick={onSearch} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm">Search</button>
    </div>
  );
};

export default SearchBar;
