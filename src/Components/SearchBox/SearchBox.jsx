import React from "react";

// eslint-disable-next-line react/prop-types
const SearchBox = ({ searchTerm, setSearchTerm }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="searchBox"
      />
    </div>
  );
};

export default SearchBox;
