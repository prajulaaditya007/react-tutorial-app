import React, { useState, ChangeEvent } from "react";

interface SearchBarProps {
  onSearch: (text: string, showStocked: boolean) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState<string>("");
  const [showStocked, setShowStocked] = useState<boolean>(false);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    onSearch(event.target.value, showStocked);
  };

  const handleStockedChange = (event: ChangeEvent<HTMLInputElement>) => {
    setShowStocked(event.target.checked);
    onSearch(searchText, event.target.checked);
  };

  return (
    <div className="searchncheck">
      <div>
        <input
          className="searchinput"
          type="text"
          value={searchText}
          onChange={handleSearchChange}
          placeholder="Search by name..."
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={showStocked}
            onChange={handleStockedChange}
          />
          Show only stocked items:
        </label>
      </div>
    </div>
  );
};

export default SearchBar;
